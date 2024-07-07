import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Component for toggling online/offline mode.
 */
@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent {
  
  /**
   * Boolean indicating whether the application is in online mode.
   */
  isOnline: boolean = true;
  
  /**
   * Event emitter for when the mode is changed.
   */
  @Output() modeChanged = new EventEmitter<boolean>();

  /**
   * Toggles the mode and emits the new mode value.
   */
  toggleMode() {
    this.modeChanged.emit(this.isOnline);
  }
}
