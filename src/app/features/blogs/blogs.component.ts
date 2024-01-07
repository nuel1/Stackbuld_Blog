import { Component, OnInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent implements OnInit {
  sharedService = inject(SharedService);

  fabOpen = false;

  async ngOnInit() {
    await this.sharedService.getBlogs();
  }

  toggleFab() {
    this.fabOpen = !this.fabOpen;
  }
}
