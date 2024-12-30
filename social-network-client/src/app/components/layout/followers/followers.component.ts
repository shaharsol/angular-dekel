import { FollowersService } from './../../../services/followers.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/users/user.model';

@Component({
  selector: 'app-followers',
  imports: [],
  templateUrl: './followers.component.html',
  styleUrl: './followers.component.css'
})
export class FollowersComponent implements OnInit{

  followers?: User[]

  constructor (private followersService: FollowersService) {}

  async ngOnInit(): Promise<void> {
    this.followers = await this.followersService.getFollowers()
  }

}
