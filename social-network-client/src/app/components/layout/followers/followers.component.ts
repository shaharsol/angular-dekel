import { FollowersService } from './../../../services/followers.service';
import { Component, OnInit, Signal } from '@angular/core';
import { User } from '../../../models/users/user.model';
import { injectAppDispatch, injectAppSelector } from '../../../store/injectables';
import { init } from '../../../store/followers-slice';
import { FollowingService } from '../../../services/following.service';
import { follow } from '../../../store/following-slice';

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

  constructor (
    private followersService: FollowersService,
    private followingService: FollowingService
  ) {}

  async ngOnInit(): Promise<void> {
    if(this.followers().length === 0) {
      const followers = await this.followersService.getFollowers()
      this.dispatch(init(followers))
    }
  }

  isFollowing(id: string): boolean {
    return !this.following().find(f => f.id === id)
  }

  async follow(id: string) {
    const isOpSuccessful = await this.followingService.follow(id)
    const userToFollow = this.getUserById(id)
    if(isOpSuccessful && userToFollow) {
      this.dispatch(follow(userToFollow))
    }
  }

  getUserById(id: string) {
    return this.followers().find(f => f.id === id)
  }
}
