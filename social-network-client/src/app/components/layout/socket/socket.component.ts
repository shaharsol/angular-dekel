import { Component } from '@angular/core';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-socket',
  imports: [],
  templateUrl: './socket.component.html',
  styleUrl: './socket.component.css'
})
export class SocketComponent {
  constructor (
    private socketService: SocketService
  ) {

  }
}
