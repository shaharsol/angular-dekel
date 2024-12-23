import { FormsModule } from '@angular/forms';
import { Component, signal } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Draft } from '../../../models/posts/draft.model';

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

  constructor( private profileService: ProfileService ) {}

  async addPost() {
    const newPost = await this.profileService.addPost(this.draft())
    console.log(newPost)
  }
}

