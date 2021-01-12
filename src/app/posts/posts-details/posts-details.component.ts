import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LayoutService } from '../../layout/layout.service';
import { Apollo, gql } from 'apollo-angular';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '../../core/destroy.service';
import { first, takeUntil } from 'rxjs/operators';
import { TransferStateService } from '@scullyio/ng-lib';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss'],
  providers: [DestroyService],
  encapsulation: ViewEncapsulation.None
})
export class PostsDetailsComponent implements OnInit {
  post: any;
  isFetching = false;

  constructor(
    public layoutService: LayoutService,
    private apollo: Apollo,
    private route: ActivatedRoute,
    private destroy$: DestroyService,
    private transferState: TransferStateService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ slug }) => {
      this.getPost(slug);
    });
  }

  getPost(slug: string): void {
    this.isFetching = true;

    const query = gql`
    query MyQuery {
      post(filter: {slug: {eq: "${slug}"}}) {
        author {
          id
          name
          picture {
            url
          }
        }
        coverImage {
          url
        }
        seoSettings {
          description
          title
          image {
            url
          }
        }
        id
        title
        slug
        date
        createdAt
        updatedAt
        content(markdown: false)
      }
    }    
    `;

    const stateName = `posts/${slug}`;

    this.transferState.useScullyTransferState(
      `posts/${slug}`,
      this.apollo
        .watchQuery({ query })
        .valueChanges
        .pipe(first())
    ).subscribe(
      (res: any) => {
        console.log(res);
        this.post = res.data.post;
      }
    );

    // this.transferState.useScullyTransferState(
    //   stateName,
    //   this.http.get(`https://jsonplaceholder.typicode.com/posts/1`)
    // ).subscribe((res: any) => {
    //   console.log(res)
    //   this.post = res;
    // })
  }

  loadDisqus(): void {
    var d = document, s = d.createElement('script');
    s.src = 'https://jajalsek.disqus.com/embed.js';
    s.setAttribute('data-timestamp', new Date().getTime().toString());
    (d.head || d.body).appendChild(s);
  }
}
