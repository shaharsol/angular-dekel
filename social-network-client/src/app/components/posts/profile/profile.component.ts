import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  answer: number = 0

  constructor( private profileService: ProfileService ) {}
  
  ngOnInit(): void {
    // fetch data from server
    this.answer = this.profileService.getAnswer()
  }

}
