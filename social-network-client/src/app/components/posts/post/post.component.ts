import { Component, input, OnInit, output } from '@angular/core';
import { Post } from '../../../models/posts/post.model';
import { DatePipe } from '@angular/common';
import { ProfileService } from '../../../services/profile.service';
import { Router } from '@angular/router';
import { CommentsComponent } from "../comments/comments.component";
import { injectAppDispatch } from '../../../store/injectables';
import { mergeNew, remove } from '../../../store/profile-slice';

@Component({
  selector: 'app-post',
  imports: [DatePipe, CommentsComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  post = input<Post>()
  isNewPost = input<boolean>(false)
  allowActions = input<boolean>(false)
  cssClass: string = 'post'
  // deletedPost = output<string>()
  public dispatch = injectAppDispatch()

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

        // instead of igniting the output events process, simply notify redux...
        // this.deletedPost.emit(post.id)
        this.dispatch(remove({id: post.id}))
      }
    }
  }

  editMe() {
    this.router.navigate([`/edit/${this.post()?.id}`])
  }

  ngOnInit(): void {
    if(this.isNewPost()) {
      this.cssClass += ' newPost'
      setTimeout(() => {
        this.dispatch(mergeNew())
      }, 2000)
    }
  }

}
