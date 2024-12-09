import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FollowersComponent } from "../followers/followers.component";
import { FollowingComponent } from '../following/following.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderComponent, 
    FollowersComponent, 
    FollowingComponent, 
    FooterComponent, 
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
