import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import { Blog } from '../../model/blog';

@Component({
  selector: 'blog-view',
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.scss',
})
export class BlogViewComponent implements OnInit {
  route = inject(ActivatedRoute);
  sharedService = inject(SharedService);
  @ViewChild('blogContent') div: ElementRef | undefined;
  fabOpen = false;
  blog: Blog | undefined;

  async ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    // const blogs = await this.sharedService.getBlogs();

    // const result = blogs.filter((blog: Blog) => blog.id === id);
    // if (result) [this.blog] = result;
  }
  toggleFab() {
    this.fabOpen = !this.fabOpen;
  }
}
