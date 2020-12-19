import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { PostDetailsComponent } from './post-details/post-details.component';
@NgModule({
  declarations: [AppComponent, PostDetailsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
