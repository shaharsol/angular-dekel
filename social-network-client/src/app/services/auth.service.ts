import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Login } from '../models/users/login.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpClient: HttpClient ) { }

  jwt = signal<string>('')

  async login(login: Login): Promise<string> {
    const response = this.httpClient.post<{jwt: string}>(`${environment.restServerUrl}/auth/login`, login)
    const { jwt } = await firstValueFrom(response)
    this.jwt.set(jwt)
    return jwt
  }

  // updateJwt(jwt: string) {
  //   this.jwt = 
  // }

}
