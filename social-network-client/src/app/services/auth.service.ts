import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Login } from '../models/users/login.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { User } from '../models/users/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpClient: HttpClient ) {
    const jwt = localStorage.getItem('jwt')
    if(jwt) this.jwt.set(jwt)
  }

  jwt = signal<string>('')
  username = computed(() => {
    const decoded = jwtDecode<User>(this.jwt())
    return decoded.name
  })
  userId = computed(() => {
    const decoded = jwtDecode<User>(this.jwt())
    return decoded.id
  })

  async login(login: Login): Promise<string> {
    const response = this.httpClient.post<{jwt: string}>(`${environment.restServerUrl}/auth/login`, login)
    const { jwt } = await firstValueFrom(response)
    this.jwt.set(jwt)
    localStorage.setItem('jwt', jwt)
    return jwt
  }

  logout() {
    localStorage.setItem('jwt', '')
    this.jwt.set('')
  }

  // updateJwt(jwt: string) {
  //   this.jwt = 
  // }

}
