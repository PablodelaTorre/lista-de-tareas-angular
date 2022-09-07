import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFinishTaskComponent } from './button-finish-task.component';

describe('ButtonFinishTaskComponent', () => {
  let component: ButtonFinishTaskComponent;
  let fixture: ComponentFixture<ButtonFinishTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFinishTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFinishTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
