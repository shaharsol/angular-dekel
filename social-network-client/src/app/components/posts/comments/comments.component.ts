import { Component, input } from '@angular/core';
import { Comment } from '../../../models/comments/comment.model';

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  comments = input<Comment[]>()
}
