import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NewsComponent } from './components/news/news.component';


@NgModule({
  declarations: [
    MediaComponent,
    BlogsComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }
