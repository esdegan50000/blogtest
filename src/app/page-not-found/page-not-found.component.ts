import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout/layout.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    public layoutService: LayoutService
  ) {
  }

  ngOnInit(): void {
  }

}
