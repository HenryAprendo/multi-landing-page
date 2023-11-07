import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNavComponent } from './item-nav.component';

describe('ItemNavComponent', () => {
  let component: ItemNavComponent;
  let fixture: ComponentFixture<ItemNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItemNavComponent]
    });
    fixture = TestBed.createComponent(ItemNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
