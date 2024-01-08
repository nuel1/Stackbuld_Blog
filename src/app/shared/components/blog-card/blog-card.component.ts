import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-card',
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  @Input({ required: true }) cover = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) author = '';
}
