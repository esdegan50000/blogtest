import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { takeUntil } from 'rxjs/operators';
import { DestroyService } from '../core/destroy.service';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  @ViewChild('leftSidenav') leftSidenav: MatSidenav;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private layoutService: LayoutService,
    private destroy$: DestroyService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.leftSidenavSubscriber();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  leftSidenavSubscriber(): void {
    this.layoutService.leftSidenavObservable$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.leftSidenav.toggle();
      });
  }
}
