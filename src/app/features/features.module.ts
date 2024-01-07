import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [BlogViewComponent, BlogsComponent],
  imports: [CommonModule, SharedModule, RouterModule, NgxPaginationModule],
  exports: [SharedModule],
})
export class FeaturesModule {}
