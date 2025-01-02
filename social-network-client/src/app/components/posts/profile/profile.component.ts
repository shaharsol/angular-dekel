import { Component, OnInit, Signal } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { environment } from '../../../../environments/environment';
import { Post } from '../../../models/posts/post.model';
import { SpinnerComponent } from "../../common/spinner/spinner.component";
import { PostComponent } from "../post/post.component";
import { NewComponent } from "../new/new.component";
import { injectAppDispatch, injectAppSelector } from '../../../store/injectables';
import { User } from '../../../models/users/user.model';
import { init } from '../../../store/profile-slice';

@Component({
  selector: 'app-profile',
  imports: [SpinnerComponent, PostComponent, NewComponent],
  providers: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  serverUrl = environment.restServerUrl

  public profilePosts: Signal<Post[]> = injectAppSelector(state => state.profile.posts)
  public newProfilePosts: Signal<Post[]> = injectAppSelector(state => state.profile.newPosts)
  public dispatch = injectAppDispatch()


  // bedore redux, we keep the state independantly
  // profilePosts?: Post[]

  constructor( private profileService: ProfileService ) {}

  async ngOnInit(): Promise<void> {
    // fetch data from server
    if (this.profilePosts().length === 0){
      const profilePostsFromServer = await this.profileService.getUserPosts()
      this.dispatch(init(profilePostsFromServer))
      // console.log(`rand is ${this.profileService.rand}`)
    }
  }

  // when using redux, we don't need the output target
  // removePost(id: string) {
    
  //   console.log(`id is ${id}`)

  //   if (this.profilePosts) {
  //     this.profilePosts = this.profilePosts.filter(post => post.id !== id)
  //     // const index = this.profilePosts.findIndex(post => post.id === id)
  //     // console.log(`index is ${index}`)
  //     // if(index !== -1) {
  //     //   this.profilePosts?.splice(index, 1)
  //     // }
  //   }

  // }

  // when using redux, we don't need the output target
  // addPost(post: Post) {
  //   this.profilePosts = this.profilePosts ? [post, ...this.profilePosts] : [post]
  // }

}
