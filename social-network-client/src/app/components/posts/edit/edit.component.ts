import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

    ]),
    body: new FormControl('',[

    ])
  })

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id')
    if(postId) {
      const post = this.profileService.getUserPost(postId)
    }
    console.log(`will edit post ${postId}`)
  }

  editPost() {
    console.log(this.editForm)
  }
}
