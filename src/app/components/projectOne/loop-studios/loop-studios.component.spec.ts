import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopStudiosComponent } from './loop-studios.component';

describe('LoopStudiosComponent', () => {
  let component: LoopStudiosComponent;
  let fixture: ComponentFixture<LoopStudiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoopStudiosComponent]
    });
    fixture = TestBed.createComponent(LoopStudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
