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

  public rand = Math.random()

  async getUserPosts(): Promise<Post[]> {

    const response = this.httpClient.get<Post[]>(`${environment.restServerUrl}/posts`)  
    // const profile = await firstValueFrom(response)
    // return profile
    return firstValueFrom(response)
  }

  async removePost(id: string): Promise<boolean> {
    const response = this.httpClient.delete<boolean>(`${environment.restServerUrl}/posts/${id}`)  
    return firstValueFrom(response)
  }
}
