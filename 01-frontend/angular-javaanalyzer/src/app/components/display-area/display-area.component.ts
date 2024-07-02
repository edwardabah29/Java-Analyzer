import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css']
})
export class DisplayAreaComponent implements OnChanges {
  @Input() analyzedResults!: string;
  @Input() previousAnalyzedResults!: string;
  
  analyzedData: any[] = [];
  previousAnalyzedData: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['analyzedResults'] && this.analyzedResults) {
      this.analyzedData = this.transformData(JSON.parse(this.analyzedResults));
    }
    if (changes['previousAnalyzedResults'] && this.previousAnalyzedResults) {
      this.previousAnalyzedData = this.transformData(JSON.parse(this.previousAnalyzedResults));
    }
  }

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



