import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users/user.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  constructor( private httpClient: HttpClient ) { }

  async getFollowers(): Promise<User[]> {
    const response = this.httpClient.get<User[]>(`${environment.restServerUrl}/follows/followers`)  
    return firstValueFrom(response)
    
  }
}
