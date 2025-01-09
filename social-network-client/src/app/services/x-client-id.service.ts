import { Injectable } from '@angular/core';
import { v4 } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class XClientIdService {

  public xClientId: string = v4()
  
  constructor() { }
}
