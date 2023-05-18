import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicShapeComponent } from './dynamic-shape.component';

describe('DynamicShapeComponent', () => {
  let component: DynamicShapeComponent;
  let fixture: ComponentFixture<DynamicShapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicShapeComponent]
    });
    fixture = TestBed.createComponent(DynamicShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
