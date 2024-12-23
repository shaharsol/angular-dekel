import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-new',
  imports: [FormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  public title = ''
  public body = ''

  constructor( private profileService: ProfileService ) {}

  addPost() {
    console.log(this.title)
    console.log(this.body)
  }
}

