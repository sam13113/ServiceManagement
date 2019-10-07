import { Injectable } from '@angular/core';
import {  BehaviorSubject  } from 'rxjs';

@Injectable()
export class HeaderStringService {
   private headerMessage: BehaviorSubject<string>;
public messageSource;
  constructor() {
    this.headerMessage = new BehaviorSubject('Service Level Management | Portfolio Management');
    this.messageSource = this.headerMessage.asObservable();
  }

  public changeMessage(message: string): void {
    this.headerMessage.next(message);
  }


}
