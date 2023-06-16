import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [NavigationComponent, ButtonComponent, DropdownComponent],
  imports: [CommonModule],
  exports: [NavigationComponent, ButtonComponent, DropdownComponent],
})
export class SharedModule {}
