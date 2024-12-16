import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  serverUrl = environment.restServerUrl

  constructor( private profileService: ProfileService ) {}
  
  async ngOnInit(): Promise<void> {
    // fetch data from server
    const profilePosts = await this.profileService.getUserPosts()
    console.log(profilePosts)
  }

}
