import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { takeUntil } from 'rxjs/operators';
import { DestroyService } from '../../core/destroy.service';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-posts-lists',
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.scss'],
  providers: [DestroyService]
})
export class PostsListsComponent implements OnInit {
  posts: any[];
  isFetching = false;

  constructor(
    public layoutService: LayoutService,
    private apollo: Apollo,
    private route: ActivatedRoute,
    private destroy$: DestroyService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      this.getPosts();
    });
  }

  getPosts(): void {
    this.isFetching = true;

    this.apollo
      .watchQuery({
        query: gql`
        query MyQuery {
          allPosts {
            coverImage {
              url
            }
            author {
              id
              name
              picture {
                url
              }
            }
            id
            title
            slug
            date
            createdAt
            updatedAt
          }
        }          
        `,
      })
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res: any) => {
          this.posts = res.data.allPosts;
          this.isFetching = false;
        },
        (err: any) => {
          this.isFetching = false;
        }
      );
  }
}
