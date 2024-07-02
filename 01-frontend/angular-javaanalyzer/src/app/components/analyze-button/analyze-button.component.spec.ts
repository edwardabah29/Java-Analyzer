import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyzeButtonComponent } from './analyze-button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AnalyzeButtonComponent', () => {
  let component: AnalyzeButtonComponent;
  let fixture: ComponentFixture<AnalyzeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzeButtonComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyzeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call analyze function when analyzeText is called', () => {
    const analyzeSpy = jasmine.createSpy('analyze');
    component.analyze = analyzeSpy;

    component.analyzeText();

    expect(analyzeSpy).toHaveBeenCalled();
  });

  it('should not throw error if analyze function is not provided', () => {
    component.analyze = undefined!;

    expect(() => component.analyzeText()).not.toThrow();
  });
});
