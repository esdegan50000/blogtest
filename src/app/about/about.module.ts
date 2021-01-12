import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutModule } from '../layout/layout.module';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,

    MaterialModule
  ],
  exports: [
    RouterModule
  ]
})
export class AboutModule { }
