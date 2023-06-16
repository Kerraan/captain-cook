import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Output() dropdownClose = new EventEmitter<boolean>();

  onClick() {
    this.dropdownClose.emit(false);
  }
}
