import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() image!: string;
  @Input() name!: string;
  @Input() size!: string;
  @Input() id!: string;

  @Output() delete = new EventEmitter<string>();

  deleteItem(value: string) {
    this.delete.emit(value);
  }
}
