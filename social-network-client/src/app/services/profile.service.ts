import { Injectable } from '@angular/core';
import { Post } from '../models/posts/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Draft } from '../models/posts/draft.model';
import { CommentDraft } from '../models/comments/comment-draft.model';
import { Comment } from '../models/comments/comment.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( 
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  public rand = Math.random()

  async getUserPosts(): Promise<Post[]> {

    const response = this.httpClient.get<Post[]>(`${environment.restServerUrl}/posts`)  
    // const response = this.httpClient.get<Post[]>(`${environment.restServerUrl}/posts`, {
    //   headers: {
    //     'Authorization': `Bearer ${this.authService.jwt()}`
    //   }
    // })  
    // const profile = await firstValueFrom(response)
    // return profile
    return firstValueFrom(response)
  }

  async getUserPost(id: string): Promise<Post> {
    const response = this.httpClient.get<Post>(`${environment.restServerUrl}/posts/${id}`)  
    return firstValueFrom(response)
  }

  async removePost(id: string): Promise<boolean> {
    const response = this.httpClient.delete<boolean>(`${environment.restServerUrl}/posts/${id}`)  
    return firstValueFrom(response)
  }

  async addPost(draft: Draft): Promise<Post> {
    const response = this.httpClient.post<Post>(`${environment.restServerUrl}/posts`, draft)  
    return firstValueFrom(response)
  }

  async updatePost(id: string, draft: Draft): Promise<Post> {
    const response = this.httpClient.patch<Post>(`${environment.restServerUrl}/posts/${id}`, draft)  
    return firstValueFrom(response)
  }

  async addComment(postId: string, draft: CommentDraft): Promise<Comment> {
    const response = this.httpClient.post<Comment>(`${environment.restServerUrl}/comments/${postId}`, draft)  
    return firstValueFrom(response)
  }

}
