import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayAreaComponent } from './display-area.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DisplayAreaComponent', () => {
  let component: DisplayAreaComponent;
  let fixture: ComponentFixture<DisplayAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAreaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should transform analyzedResults when input changes', () => {
    const analyzedResults = JSON.stringify({
      vowels: { a: 2, e: 3 },
      consonants: { b: 1, c: 2 }
    });

    component.analyzedResults = analyzedResults;
    component.ngOnChanges({
      analyzedResults: {
        currentValue: analyzedResults,
        previousValue: '',
        firstChange: true,
        isFirstChange: () => true
      }
    });

    expect(component.analyzedData.length).toBe(4);
    expect(component.analyzedData).toEqual([
      { type: 'vowels', letter: 'a', occurrence: 2 },
      { type: 'vowels', letter: 'e', occurrence: 3 },
      { type: 'consonants', letter: 'b', occurrence: 1 },
      { type: 'consonants', letter: 'c', occurrence: 2 }
    ]);
  });

  it('should transform previousAnalyzedResults when input changes', () => {
    const previousAnalyzedResults = JSON.stringify({
      vowels: { i: 1, o: 2 },
      consonants: { d: 3, f: 4 }
    });

    component.previousAnalyzedResults = previousAnalyzedResults;
    component.ngOnChanges({
      previousAnalyzedResults: {
        currentValue: previousAnalyzedResults,
        previousValue: '',
        firstChange: true,
        isFirstChange: () => true
      }
    });

    expect(component.previousAnalyzedData.length).toBe(4);
    expect(component.previousAnalyzedData).toEqual([
      { type: 'vowels', letter: 'i', occurrence: 1 },
      { type: 'vowels', letter: 'o', occurrence: 2 },
      { type: 'consonants', letter: 'd', occurrence: 3 },
      { type: 'consonants', letter: 'f', occurrence: 4 }
    ]);
  });
});
