import { FollowersService } from './../../../services/followers.service';
import { Component, OnInit, Signal } from '@angular/core';
import { User } from '../../../models/users/user.model';
import { injectAppDispatch, injectAppSelector } from '../../../store/injectables';
import { init } from '../../../store/followers-slice';

@Component({
  selector: 'app-followers',
  imports: [],
  templateUrl: './followers.component.html',
  styleUrl: './followers.component.css'
})
export class FollowersComponent implements OnInit{

  // public followers?: User[]
  public followers: Signal<User[]> = injectAppSelector(state => state.followers.followers)
  public following: Signal<User[]> = injectAppSelector(state => state.following.following)
  public dispatch = injectAppDispatch()

  constructor (private followersService: FollowersService) {}

  async ngOnInit(): Promise<void> {
    if(this.followers().length === 0) {
      const followers = await this.followersService.getFollowers()
      this.dispatch(init(followers))
    }
  }

  isFollowing(id: string): boolean {
    console.log(this.following())
    return !this.following().find(f => f.id === id)
  }

  async follow(id: string) {

  }
}
