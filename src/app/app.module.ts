import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialPostComponent } from './social-post/social-post.component';
import { PostFormComponent } from './social-post/post-form/post-form.component';
import { PostComponent } from './social-post/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialPostComponent,
    PostFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
