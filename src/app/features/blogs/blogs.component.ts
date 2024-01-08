import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { Blog } from '../../model/blog';

@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent implements OnInit {
  sharedService = inject(SharedService);

  fabOpen = false;
  blogs: Blog[] = [];

  async ngOnInit() {
    this.blogs = await this.sharedService.getBlogs();
    console.log(this.blogs);
  }

  async addBlog(blog: Blog) {
    await this.sharedService.addBlog(blog);
    this.blogs = await this.sharedService.getBlogs();
  }

  toggleFab() {
    this.fabOpen = !this.fabOpen;
  }
}
