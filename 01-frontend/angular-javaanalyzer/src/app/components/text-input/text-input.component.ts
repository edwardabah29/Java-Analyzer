import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Component for the text input and analysis type selection.
 */
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {

  /**
   * The input text to be analyzed.
   */
  inputText: string = '';

  /**
   * The type of analysis to be performed.
   */
  analysisType: string = 'vowels';

  /**
   * Event emitter for when text is entered and the analysis type is selected.
   */
  @Output() textEntered = new EventEmitter<{text: string, type: string}>();

  /**
   * Emits the text and analysis type when called.
   */
  emitText() {
    this.textEntered.emit({text: this.inputText, type: this.analysisType});
  }
}
