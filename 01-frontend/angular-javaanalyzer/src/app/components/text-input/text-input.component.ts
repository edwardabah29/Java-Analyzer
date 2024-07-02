import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  inputText: string = '';
  analysisType: string = 'vowels';
  @Output() textEntered = new EventEmitter<{text: string, type: string}>();

  emitText() {
    this.textEntered.emit({text: this.inputText, type: this.analysisType});
  }
}
