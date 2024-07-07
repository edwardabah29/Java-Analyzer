import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

/**
 * Component to display the analyzed results.
 */
@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css']
})
export class DisplayAreaComponent implements OnChanges {
  
  /**
   * The analyzed results in JSON string format.
   */
  @Input() analyzedResults!: string;

  /**
   * The previously analyzed results in JSON string format.
   */
  @Input() previousAnalyzedResults!: string;
  
  /**
   * The parsed analyzed results.
   */
  analyzedData: any[] = [];

  /**
   * The parsed previously analyzed results.
   */
  previousAnalyzedData: any[] = [];

  /**
   * Handles changes to input properties.
   * @param changes The changes to input properties.
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['analyzedResults'] && this.analyzedResults) {
      this.analyzedData = this.transformData(JSON.parse(this.analyzedResults));
    }
    if (changes['previousAnalyzedResults'] && this.previousAnalyzedResults) {
      this.previousAnalyzedData = this.transformData(JSON.parse(this.previousAnalyzedResults));
    }
  }

  /**
   * Transforms the input data to a structured format.
   * @param data The input data to transform.
   * @returns The transformed data.
   */
  transformData(data: any): any[] {
    const result: any[] = [];
    for (const type in data) {
      if (data.hasOwnProperty(type)) {
        const letters = data[type];
        for (const letter in letters) {
          if (letters.hasOwnProperty(letter)) {
            result.push({
              type: type,
              letter: letter,
              occurrence: letters[letter]
            });
          }
        }
      }
    }
    return result;
  }
}



