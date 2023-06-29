import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: MediaComponent,
    children: [
      {
        path: 'blogs',
        component: BlogsComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaRoutingModule {}
