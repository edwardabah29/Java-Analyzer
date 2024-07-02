import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TextAnalysisService } from './services/text-analysis.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Mock components
@Component({
  selector: 'app-text-input',
  template: ''
})
class MockTextInputComponent {
  @Input() inputText: string = '';
  @Input() analysisType: string = 'vowels';
  @Output() textEntered = new EventEmitter<{ text: string, type: string }>();

  emitText() {
    this.textEntered.emit({ text: this.inputText, type: this.analysisType });
  }
}

@Component({
  selector: 'app-toggle-switch',
  template: ''
})
class MockToggleSwitchComponent {
  @Output() modeChanged = new EventEmitter<boolean>();
}

@Component({
  selector: 'app-analyze-button',
  template: ''
})
class MockAnalyzeButtonComponent {
  @Input() analyze!: () => void;
}

@Component({
  selector: 'app-display-area',
  template: ''
})
class MockDisplayAreaComponent {
  @Input() analyzedResults!: string;
  @Input() previousAnalyzedResults!: string;
}

describe('AppComponent', () => {
  let textAnalysisService: jasmine.SpyObj<TextAnalysisService>;
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('TextAnalysisService', ['analyzeOnline', 'analyzeOffline']);

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockTextInputComponent,
        MockToggleSwitchComponent,
        MockAnalyzeButtonComponent,
        MockDisplayAreaComponent
      ],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [{ provide: TextAnalysisService, useValue: spy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    textAnalysisService = TestBed.inject(TextAnalysisService) as jasmine.SpyObj<TextAnalysisService>;
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    app.textInputComponent = new MockTextInputComponent() as any;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should call analyzeOnline when isOnline is true', () => {
    textAnalysisService.analyzeOnline.and.returnValue(of({ vowels: { a: 1, e: 1 } }));

    app.isOnline = true;
    app.analyzeText();

    expect(textAnalysisService.analyzeOnline).toHaveBeenCalledWith(app.inputText, app.analysisType);
  });

  it('should call analyzeOffline when isOnline is false', () => {
    textAnalysisService.analyzeOffline.and.returnValue({ vowels: { a: 1, e: 1 } });

    app.isOnline = false;
    app.analyzeText();

    expect(textAnalysisService.analyzeOffline).toHaveBeenCalledWith(app.inputText, app.analysisType);
  });

  it('should update previousAnalyzedResults with analyzedResults', () => {
    textAnalysisService.analyzeOnline.and.returnValue(of({ vowels: { a: 1, e: 1 } }));

    app.isOnline = true;
    app.analyzeText();

    expect(app.previousAnalyzedResults).toBe('');
    expect(app.analyzedResults).toBe(JSON.stringify({ vowels: { a: 1, e: 1 } }, null, 2));
  });

  it('should handle mode change', () => {
    app.onModeChange(false);
    expect(app.isOnline).toBeFalse();
  });
});
