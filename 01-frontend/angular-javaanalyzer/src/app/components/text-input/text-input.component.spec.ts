import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TextInputComponent } from './text-input.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputComponent ],
      imports: [ FormsModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit textEntered event when emitText is called', () => {
    spyOn(component.textEntered, 'emit');
    component.inputText = 'test';
    component.analysisType = 'vowels';
    component.emitText();
    expect(component.textEntered.emit).toHaveBeenCalledWith({ text: 'test', type: 'vowels' });
  });

  it('should update inputText when input changes', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    expect(component.inputText).toBe('test');
  });
});
