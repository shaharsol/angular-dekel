import { Component, computed, model, OnInit, signal } from '@angular/core';
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
  constructor (private commentsService: CommentsService) {
    
  }
  allComments = signal<Comment[]>([])
  // filterredComments: Comment[] = []
  search = model('')
  filterredComments = computed(() => {
    const allComments = this.allComments().filter(c => c.body.toLowerCase().includes(this.search().toLowerCase()))

    return allComments
  })

  async ngOnInit() {
    const allComments = await this.commentsService.getComments()
    this.allComments.set(allComments)
  }

  // filter() {
  //   this.filterredComments = this.allComments.filter(c => c.body.toLowerCase().includes(this.search().toLowerCase()))
  // }
}
