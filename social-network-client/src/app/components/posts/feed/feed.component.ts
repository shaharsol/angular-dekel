import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Post } from '../../../models/posts/post.model';
import { FeedService } from '../../../services/feed.service';
import { SpinnerComponent } from "../../common/spinner/spinner.component";
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-feed',
  imports: [SpinnerComponent, PostComponent],
  providers: [SpinnerComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {

  posts?: Post[] 

  constructor( private feedService: FeedService ) {}

  async ngOnInit(): Promise<void> {
    this.posts = await this.feedService.getPosts()
  }
}
