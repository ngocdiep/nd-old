import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

// We use the gql tag to parse our query string into a query document
const allPosts = gql`
query allPosts {
  allPosts {
    id,
    title,
    description
  }
}
`;

interface QueryResponse {
  allPosts;
  loading;
}


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  loading: boolean;
  allPosts: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<QueryResponse>({
      query: allPosts
    }).subscribe(({ data }) => {
      this.loading = data.loading;
      this.allPosts = data.allPosts;
    });
  }

}
