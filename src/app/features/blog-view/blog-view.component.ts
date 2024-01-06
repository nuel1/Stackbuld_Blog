import { Component } from '@angular/core';

@Component({
  selector: 'blog-view',
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.scss',
})
export class BlogViewComponent {
  fabOpen = false;

  toggleFab() {
    this.fabOpen = !this.fabOpen;
  }
}
