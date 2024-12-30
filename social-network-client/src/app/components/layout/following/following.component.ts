import { Component } from '@angular/core';
import { User } from '../../../models/users/user.model';
import { FollowingService } from '../../../services/following.service';

@Component({
  selector: 'app-following',
  imports: [],
  templateUrl: './following.component.html',
  styleUrl: './following.component.css'
})
export class FollowingComponent {
  following?: User[]

  constructor (private followingService: FollowingService) {}

  async ngOnInit(): Promise<void> {
    this.following = await this.followingService.getFollowing()
  }
}
