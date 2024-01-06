import { Component, Input } from '@angular/core';

@Component({
  selector: 'delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.scss',
})
export class DeleteModalComponent {
  @Input() title = '';
}
