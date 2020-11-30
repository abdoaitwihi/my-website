import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navStatus = new BehaviorSubject<string>('close');

  constructor() {}
  getStatus() {
    return this.navStatus.asObservable();
  }
  closeNav() {
    this.navStatus.next('close');
  }
  openNav() {
    this.navStatus.next('open');
  }
}
