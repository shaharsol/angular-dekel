import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-feed',
  imports: [],
  providers: [],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  constructor( private profileService: ProfileService ) {}

  async ngOnInit(): Promise<void> {
    console.log(`rand is ${this.profileService.rand}`)
  }
}
