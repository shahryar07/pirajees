import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepReivewComponent } from './step-reivew.component';

describe('StepReivewComponent', () => {
  let component: StepReivewComponent;
  let fixture: ComponentFixture<StepReivewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepReivewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepReivewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
