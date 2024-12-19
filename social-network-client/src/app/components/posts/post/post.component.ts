import { Component, input } from '@angular/core';
import { Post } from '../../../models/posts/post.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  post = input<Post>()

}
