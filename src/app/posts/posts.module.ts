import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutModule } from '../layout/layout.module';
import { GraphQLModule } from '../graphql.module';
import { MarkdownModule } from 'ngx-markdown';
import { PostsListsComponent } from './posts-lists/posts-lists.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'posts',
        component: PostsListsComponent
      },
      {
        path: 'posts/:slug',
        component: PostsDetailsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    PostsListsComponent,
    PostsDetailsComponent
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
export class PostsModule { }
