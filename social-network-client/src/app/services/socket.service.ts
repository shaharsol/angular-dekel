import { XClientIdService } from './x-client-id.service';
import { Injectable, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { injectAppDispatch } from '../store/injectables';
import { add } from '../store/profile-slice';
import { SocketMessage } from '../models/socket-messages/socket-message.model';
import { NewPost } from '../models/socket-messages/new-post.model';
import { AuthService } from './auth.service';
import { NewFollow } from '../models/socket-messages/new-follow.model';
import { follow, unfollow } from '../store/following-slice';
import { NewUnfollow } from '../models/socket-messages/new-unfollow.model';

@Injectable({
  providedIn: 'root'
})
export class SocketService{

  socket: Socket
  public dispatch = injectAppDispatch()

  constructor(
    private xClientIdService: XClientIdService,
    private authService: AuthService
  ) {
    this.socket = io(`${environment.socketServerUrl}`)
  }

  on(): Observable<any> {
    return new Observable((observer) => {
      this.socket.onAny((event, payload: SocketMessage) => {
        if(this.xClientIdService.xClientId !== payload.from) {
          observer.next({event, payload});
        }
      });

      // Handle cleanup
      return () => {
        this.socket.off();
      };
    });
  }


  handleSocketMessage(event: string, payload: SocketMessage): void {
    const userId = this.authService.userId()
    switch (event) {
      case 'new-post':
        const newPost = payload as NewPost
        if(userId === newPost.post.userId) {
          this.dispatch(add((payload as NewPost).post))
        }
        break;
      case 'new-follow':
        // this.dispatch(add(payload.post))
        const newFollow = payload as NewFollow
        if(userId === newFollow.follower.id) {
          this.dispatch(follow(newFollow.followee))
        }
        break;
      case 'new-unfollow':
        // this.dispatch(add(payload.post))
        const newUnfollow = payload as NewUnfollow
        if(userId === newUnfollow.follower.id) {
          this.dispatch(unfollow(newUnfollow.followee))
        }
        break;
      }
  }

  start() {
    const subscription = this.on().subscribe(({event, payload}) => {
      console.log({event, payload})
      this.handleSocketMessage(event, payload)
    }) 
  }


}
