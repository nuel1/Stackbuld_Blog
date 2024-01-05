import { Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogViewComponent } from './components/blog-view/blog-view.component';

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
