import { Component, input, output } from '@angular/core';
import { Post } from '../../../models/posts/post.model';
import { DatePipe } from '@angular/common';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-post',
  imports: [DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  post = input<Post>()
  deletedPost = output<string>()

  constructor( private profileService: ProfileService ) {}

  async deleteMe() {
    const post = this.post()
    if (post) {
      const isDeleted = await this.profileService.removePost(post.id)
      if (isDeleted) {
        // remove from UI
        // somehow let the parent know they need to delete the post
        this.deletedPost.emit(post.id)
      }
    }
  }

}
