import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analyze-button',
  templateUrl: './analyze-button.component.html',
  styleUrls: ['./analyze-button.component.css']
})
export class AnalyzeButtonComponent {
  @Input() analyze!: () => void;

  analyzeText() {
    if (this.analyze) {
      this.analyze();
    }
  }
}
