import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchComponent } from './toggle-switch.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ToggleSwitchComponent', () => {
  let component: ToggleSwitchComponent;
  let fixture: ComponentFixture<ToggleSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleSwitchComponent ],
      imports: [ FormsModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit modeChanged event when toggleMode is called', () => {
    spyOn(component.modeChanged, 'emit');
    component.toggleMode();
    expect(component.modeChanged.emit).toHaveBeenCalledWith(component.isOnline);
  });

  it('should update isOnline when checkbox is toggled', () => {
    const checkbox = fixture.nativeElement.querySelector('input');
    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('change'));
    expect(component.isOnline).toBeFalse();
  });
});
