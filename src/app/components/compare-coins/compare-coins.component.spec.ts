import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCoinsComponent } from './compare-coins.component';

describe('CompareCoinsComponent', () => {
  let component: CompareCoinsComponent;
  let fixture: ComponentFixture<CompareCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareCoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
