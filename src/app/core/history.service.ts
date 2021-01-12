import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private _previousUrl: string;

  constructor(
    private router: Router
  ) { }

  set previousUrl(previousUrl: string) {
    this._previousUrl = previousUrl;
  }

  get previousUrl(): string {
    return this._previousUrl;
  }

  init(): void {
    this.router.events
      .pipe(
        filter((event: any) => event instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((events: RoutesRecognized[]) => {
        this.previousUrl = events[0].urlAfterRedirects;
      });
  }
}
