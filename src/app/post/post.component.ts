import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

// We use the gql tag to parse our query string into a query document
const allProducts = gql`
query allProducts {
  allProducts {
    id
    name
    price
    image
  }
}
`;

interface QueryResponse {
  allProducts;
  loading;
}


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  loading: boolean;
  allProducts: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<QueryResponse>({
      query: allProducts
    }).subscribe(({ data }) => {
      this.loading = data.loading;
      this.allProducts = data.allProducts;
    });
  }

}
