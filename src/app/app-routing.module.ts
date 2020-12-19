import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: ':id',
    component: PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
