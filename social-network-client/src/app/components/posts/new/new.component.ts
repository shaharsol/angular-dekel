import { FormsModule } from '@angular/forms';
import { Component, output, signal } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Draft } from '../../../models/posts/draft.model';
import { Post } from '../../../models/posts/post.model';

@Component({
  selector: 'app-new',
  imports: [FormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  public draft = signal<Draft>({
    title: '',
    body: ''
  }) 

  newPost = output<Post>()

  constructor( private profileService: ProfileService ) {}

  async addPost() {
    const newPost = await this.profileService.addPost(this.draft())
    this.newPost.emit(newPost)
  }
}

