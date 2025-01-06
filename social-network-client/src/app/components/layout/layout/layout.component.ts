import { Component, computed, OnInit, signal } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FollowersComponent } from "../followers/followers.component";
import { FollowingComponent } from '../following/following.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoginComponent } from "../../auth/login/login.component";
import { SocketComponent } from "../socket/socket.component";

@Component({
  selector: 'app-layout',
  imports: [
    HeaderComponent,
    FollowersComponent,
    FollowingComponent,
    FooterComponent,
    RouterOutlet,
    LoginComponent,
    SocketComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  constructor (    
    private authService: AuthService
  ) {}

  public jwt = computed(() => this.authService.jwt())

  ngOnInit () {
    // this.jwt.set(this.authService.jwt())
  }
}
