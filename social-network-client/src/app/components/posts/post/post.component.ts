import { Component, input, output } from '@angular/core';
import { Post } from '../../../models/posts/post.model';
import { DatePipe } from '@angular/common';
import { ProfileService } from '../../../services/profile.service';
import { Router } from '@angular/router';
import { CommentsComponent } from "../comments/comments.component";

@Component({
  selector: 'app-post',
  imports: [DatePipe, CommentsComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  post = input<Post>()
  allowActions = input<boolean>(false)
  deletedPost = output<string>()

  constructor( 
    private profileService: ProfileService,
    private router: Router
  ) {}

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

  editMe() {
    this.router.navigate([`/edit/${this.post()?.id}`])
  }

}
