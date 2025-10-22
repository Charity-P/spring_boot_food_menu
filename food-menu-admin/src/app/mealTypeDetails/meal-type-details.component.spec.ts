import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTypeDetailsComponent } from './meal-type-details.component';

describe('MealTypeDetailsComponent', () => {
  let component: MealTypeDetailsComponent;
  let fixture: ComponentFixture<MealTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealTypeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
