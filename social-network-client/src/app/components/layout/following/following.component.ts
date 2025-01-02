import { Component, Signal } from '@angular/core';
import { User } from '../../../models/users/user.model';
import { FollowingService } from '../../../services/following.service';
import { injectAppDispatch, injectAppSelector } from '../../../store/injectables';
import { init, unfollow } from '../../../store/following-slice';

@Component({
  selector: 'app-following',
  imports: [],
  templateUrl: './following.component.html',
  styleUrl: './following.component.css'
})
export class FollowingComponent {
  public following: Signal<User[]> = injectAppSelector(state => state.following.following)
  public dispatch = injectAppDispatch()

  constructor (private followingService: FollowingService) {}

  async ngOnInit(): Promise<void> {
    if(this.following().length === 0) {
      const following = await this.followingService.getFollowing()
      this.dispatch(init(following))
    }
  }

  async unfollow(id: string) {
    const unfollowed = await this.followingService.unfollow(id)
    if(unfollowed) {
      // this.following = this.following?.filter(follow => follow.id !== id)
      this.dispatch(unfollow({id}))
    }

  }
}
