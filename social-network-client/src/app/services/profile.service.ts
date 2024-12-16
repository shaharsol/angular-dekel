import { Injectable } from '@angular/core';
import { Post } from '../models/posts/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private httpClient: HttpClient ) { }

  async getUserPosts(): Promise<Post[]> {
    const response = this.httpClient.get<Post[]>(`${environment.restServerUrl}/posts`)  
    // const profile = await firstValueFrom(response)
    // return profile
    return firstValueFrom(response)
  }
}
