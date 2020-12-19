import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  USERS_API_URL = 'https://jsonplaceholder.typicode.com/users/id';
  userId: any;
  user: any;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        pluck('id'),
        switchMap((id) => this.getUsers(id))
      )
      .subscribe((user) => (this.user = user));
  }

  getUsers(id: string) {
    return this.http.get(this.USERS_API_URL.replace('id', id));
  }
}
