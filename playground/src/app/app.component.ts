import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AllcapsPipe } from "./pipes/allcaps.pipe";

@Component({
  selector: 'app-root',
  imports: [FormsModule, DatePipe, AllcapsPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  
  
  public currentTime = signal(new Date())
  public username = signal('shahar')
  public userEmail = computed(() => `${this.username()}@dekel-group.co.il`)
  public address: string = 'haatzmaut'
  public intervalId: any;
  getUsername() {
    return this.username()
  }
  

  doubleUsername(event: any) {
    console.log(event)
    this.username.set(`${this.username()}${this.username()}`)
  }
  
  isButtonBDisabled = false
  toggleButtonB() {
    this.isButtonBDisabled = !this.isButtonBDisabled
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentTime.set(new Date())
    }, 1000)
  } 
  
  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }
}
