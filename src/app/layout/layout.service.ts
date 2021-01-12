import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private leftSidenavObservable = new Subject();
  leftSidenavObservable$ = this.leftSidenavObservable.asObservable();

  constructor() { }

  toggleLeftSidenav(): void {
    this.leftSidenavObservable.next();
  }
}
