import { Injectable, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { injectAppDispatch } from '../store/injectables';
import { add } from '../store/profile-slice';

@Injectable({
  providedIn: 'root'
})
export class SocketService{

  socket: Socket
  public dispatch = injectAppDispatch()

  constructor() {
    this.socket = io(`${environment.socketServerUrl}`)
  }

  on(): Observable<any> {
    return new Observable((observer) => {
      this.socket.onAny((event, payload) => {
        observer.next({event, payload});
      });

      // Handle cleanup
      return () => {
        this.socket.off();
      };
    });
  }


  handleSocketMessage(event: string, payload: any): void {
    switch (event) {
      case 'new-post':
        this.dispatch(add(payload.post))
        break;
      case 'new-follow':
        // this.dispatch(add(payload.post))
        break;
      case 'new-unfollow':
        // this.dispatch(add(payload.post))
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
