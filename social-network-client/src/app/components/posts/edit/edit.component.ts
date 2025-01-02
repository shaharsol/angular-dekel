import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Draft } from '../../../models/posts/draft.model';
import { injectAppDispatch } from '../../../store/injectables';
import { update } from '../../../store/profile-slice';

@Component({
  selector: 'app-edit',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService
  ) {}

  public dispatch = injectAppDispatch()
  
  editForm = new FormGroup({
    title: new FormControl('',[
      Validators.required,
      Validators.minLength(10)
    ]),
    body: new FormControl('',[
      Validators.required,
      Validators.minLength(20)
    ])
  })

  async ngOnInit(): Promise<void> {
    const postId = this.route.snapshot.paramMap.get('id')
    if(postId) {
      const post = await this.profileService.getUserPost(postId)
      this.editForm.patchValue(post)
    }
    console.log(`will edit post ${postId}`)
  }

  async editPost() {
    if(this.editForm.valid) {
      const postId = this.route.snapshot.paramMap.get('id')
      const { title, body } = this.editForm.value
      if (postId && title && body) {
        const updatedPost = await this.profileService.updatePost(postId, { title, body })
        this.dispatch(update(updatedPost))
        this.router.navigate(['/profile'])
      }
    }
  }
}
