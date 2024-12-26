import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  constructor (
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {}

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

  editPost() {
    if(this.editForm.valid) {

    }
  }
}
