import { FormsModule } from '@angular/forms';
import { Component, output, signal } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Draft } from '../../../models/posts/draft.model';
import { Post } from '../../../models/posts/post.model';
import { injectAppDispatch } from '../../../store/injectables';
import { add } from '../../../store/profile-slice';

@Component({
  selector: 'app-new',
  imports: [FormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  public dispatch = injectAppDispatch()
  
  public draft = signal<Draft>({
    title: '',
    body: ''
  }) 

  // newPost = output<Post>()

  constructor( private profileService: ProfileService ) {}

  async addPost() {
    const newPost = await this.profileService.addPost(this.draft())
    // before redux we emit and start the output process
    // this.newPost.emit(newPost)
    // after redux, all we need is to dispatch...
    this.dispatch(add(newPost))

  }
}

