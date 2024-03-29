import { Component, Input } from '@angular/core';

@Component({
  selector: 'small-modal',
  templateUrl: './small-modal.component.html',
  styleUrl: './small-modal.component.scss',
})
export class SmallModalComponent {
  @Input() title = '';
  @Input({ required: true }) id = '';
}
