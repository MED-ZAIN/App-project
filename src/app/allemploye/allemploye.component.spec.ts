import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllemployeComponent } from './allemploye.component';

describe('AllemployeComponent', () => {
  let component: AllemployeComponent;
  let fixture: ComponentFixture<AllemployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllemployeComponent]
    });
    fixture = TestBed.createComponent(AllemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
