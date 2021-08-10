import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSigninComponent } from './step-signin.component';

describe('StepSigninComponent', () => {
  let component: StepSigninComponent;
  let fixture: ComponentFixture<StepSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
