import { Component, Input } from '@angular/core';

/**
 * Component for the analyze button.
 */
@Component({
  selector: 'app-analyze-button',
  templateUrl: './analyze-button.component.html',
  styleUrls: ['./analyze-button.component.css']
})
export class AnalyzeButtonComponent {

  /**
   * Function to be called when the button is clicked.
   */
  @Input() analyze!: () => void;

  /**
   * Calls the analyze function if it is defined.
   */
  analyzeText() {
    if (this.analyze) {
      this.analyze();
    }
  }
}
