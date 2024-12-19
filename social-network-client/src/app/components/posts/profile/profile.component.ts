import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { environment } from '../../../../environments/environment';
import { Post } from '../../../models/posts/post.model';
import { SpinnerComponent } from "../../common/spinner/spinner.component";
import { PostComponent } from "../post/post.component";

@Component({
  selector: 'app-profile',
  imports: [SpinnerComponent, PostComponent],
  providers: [SpinnerComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  serverUrl = environment.restServerUrl
  profilePosts?: Post[]

  constructor( private profileService: ProfileService ) {}
  
  async ngOnInit(): Promise<void> {
    // fetch data from server
    this.profilePosts = await this.profileService.getUserPosts()
    console.log(`rand is ${this.profileService.rand}`)
  }

  removePost(id: string) {
    
    console.log(`id is ${id}`)

    if (this.profilePosts) {
      const index = this.profilePosts.findIndex(post => post.id === id)
      console.log(`index is ${index}`)
      if(index !== -1) {
        this.profilePosts?.splice(index, 1)
      }
    }

  }

}
