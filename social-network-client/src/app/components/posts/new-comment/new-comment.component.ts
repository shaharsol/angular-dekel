import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-new-comment',
  imports: [ReactiveFormsModule],
  templateUrl: './new-comment.component.html',
  styleUrl: './new-comment.component.css'
})
export class NewCommentComponent {

  constructor (
    private profileService: ProfileService
  ) {}

  postId = input<string>()

  editForm = new FormGroup({
    body: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  })

  async addComment() {
    if(this.editForm.valid) {
      const { body } = this.editForm.value
      const postId = this.postId()
      if (postId && body) {
        const newComment = await this.profileService.addComment(postId, { body })
        console.log(newComment)
      }
    }
  }
}
