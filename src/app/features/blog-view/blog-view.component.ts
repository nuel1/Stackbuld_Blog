import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'blog-view',
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.scss',
})
export class BlogViewComponent {
  @ViewChild('blogContent') div: ElementRef | undefined;
  fabOpen = false;

  toggleFab() {
    this.fabOpen = !this.fabOpen;
  }
}
