import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  ngbModal = inject(NgbModal);

  fabOpen = false;

  openModal(template: any) {
    this.ngbModal.open(template);
  }

  toggleFab() {
    this.fabOpen = !this.fabOpen;
  }
}
