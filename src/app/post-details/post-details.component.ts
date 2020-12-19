import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts/id';
  post: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
      this.activatedRoute.params
      .pipe(
        pluck('id'),
        switchMap((id) => this.getPosts(id))
      )
      .subscribe((post) => (this.post = post));
  }

  getPosts(id: string) {
    return this.http.get(this.POSTS_API_URL.replace('id', id));
  }

}
