import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { GraphQLModule } from '../graphql.module';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from '../layout/layout.component';
import { PostsListsComponent } from '../posts/posts-lists/posts-lists.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: PostsListsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    //
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    GraphQLModule,
    MarkdownModule.forChild(),

    MaterialModule
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
