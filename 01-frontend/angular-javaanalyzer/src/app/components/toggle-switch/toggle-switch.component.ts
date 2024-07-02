import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent {
  isOnline: boolean = true;
  @Output() modeChanged = new EventEmitter<boolean>();

  toggleMode() {
    this.modeChanged.emit(this.isOnline);
  }
}
