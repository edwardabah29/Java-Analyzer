import { Component, ViewChild } from '@angular/core';
import { TextAnalysisService } from './services/text-analysis.service';
import { TextInputComponent } from './components/text-input/text-input.component';

/**
 * Root component of the application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-javaanalyzer';

  analyzedResults: string = '';
  previousAnalyzedResults: string = '';
  inputText: string = '';
  analysisType: string = 'vowels';
  isOnline: boolean = true;

  @ViewChild(TextInputComponent) textInputComponent!: TextInputComponent;

  constructor(private textAnalysisService: TextAnalysisService) {}

  /**
   * Handles text entered event.
   * @param event The text and type entered.
   */
  onTextEntered(event: {text: string, type: string}) {
    this.inputText = event.text;
    this.analysisType = event.type;
  }

/**
   * Analyzes the text based on the current mode.
   */
analyzeText() {
  this.textInputComponent.emitText();
  if (this.isOnline) {
    this.textAnalysisService.analyzeOnline(this.inputText, this.analysisType).subscribe(result => {
      this.previousAnalyzedResults = this.analyzedResults;
      console.log('Response:', result);
      this.analyzedResults = JSON.stringify(result, null, 2);
    });
  } else {
    this.previousAnalyzedResults = this.analyzedResults;
    const result = this.textAnalysisService.analyzeOffline(this.inputText, this.analysisType);
      this.analyzedResults = JSON.stringify(result, null, 2);
      console.log('Offline Response:', result);
  }
}

/**
   * Handles mode change event.
   * @param isOnline The new mode.
   */
  onModeChange(isOnline: boolean) {
    this.isOnline = isOnline;
  }
}