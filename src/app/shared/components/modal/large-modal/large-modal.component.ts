import { Component, Input } from '@angular/core';

@Component({
  selector: 'large-modal',

  templateUrl: './large-modal.component.html',
  styleUrl: './large-modal.component.scss',
})
export class LargeModalComponent {
  @Input() title = '';
  @Input({ required: true }) id = '';
}
