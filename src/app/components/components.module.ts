import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

@NgModule({
  declarations: [BlogsComponent, BlogViewComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
