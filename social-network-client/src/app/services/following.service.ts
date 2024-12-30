import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users/user.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowingService {

  constructor( private httpClient: HttpClient ) { }
  
    async getFollowing(): Promise<User[]> {
      const response = this.httpClient.get<User[]>(`${environment.restServerUrl}/follows/following`)  
      return firstValueFrom(response)
      
    }

    async unfollow(id: string): Promise<boolean> {
      const response = this.httpClient.post<boolean>(`${environment.restServerUrl}/follows/unfollow/${id}`, {})  
      return firstValueFrom(response)
    }
}
