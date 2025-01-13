import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../../services/comments.service';
import { Comment } from '../../../models/comments/comment.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  constructor (private commentsService: CommentsService) {}
  allComments: Comment[] = []
  filterredComments: Comment[] = []
  search: string = ''

  async ngOnInit() {
    this.allComments = await this.commentsService.getComments()
    this.filterredComments = [...this.allComments]
  }

  filter() {
    this.filterredComments = this.allComments.filter(c => c.body.toLowerCase().includes(this.search.toLowerCase()))
  }
}
