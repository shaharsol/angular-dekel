import { Component, input } from '@angular/core';
import { Comment } from '../../../models/comments/comment.model';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-comments',
  imports: [CommentComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  comments = input<Comment[]>()
}
