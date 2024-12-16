import { Injectable } from '@angular/core';
import { Post } from '../models/posts/post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private httpClient: HttpClient ) { }

  getAnswer(): number {
    return 42;
  }

  async getUserPosts(): Promise<Post[]> {
    this.httpClient.get<Post[]>('http://localhost:3003/delay/allow/posts')  
  }
}
