import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertCoinsComponent } from './convert-coins.component';

describe('ConvertCoinsComponent', () => {
  let component: ConvertCoinsComponent;
  let fixture: ComponentFixture<ConvertCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertCoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
