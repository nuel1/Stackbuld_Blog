import { Routes } from '@angular/router';
import { BlogViewComponent } from './features/blog-view/blog-view.component';
import { BlogsComponent } from './features/blogs/blogs.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'blogs',
    pathMatch: 'full',
  },
  {
    path: 'blogs',
    component: BlogsComponent,
  },
  {
    path: 'blogs/:id',
    component: BlogViewComponent,
  },
];
