import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { PostsModule } from './posts/posts.module';
import { MarkdownModule } from 'ngx-markdown';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'esdegan' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    MarkdownModule.forRoot({}),
    HomeModule,
    AboutModule,
    PostsModule,
    PageNotFoundModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
