import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post } from '../models/posts/post.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor( private httpClient: HttpClient ) { }

  async getPosts(): Promise<Post[]> {
    const response = this.httpClient.get<Post[]>(`${environment.restServerUrl}/feed`)  
    return firstValueFrom(response)
  }

}
