import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../models/comments/comment.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor( private httpClient: HttpClient ) { }

  async getComments(): Promise<Comment[]> {
      const response = this.httpClient.get<Comment[]>(`${environment.restServerUrl}/comments`)  
      return firstValueFrom(response)
    }
}
