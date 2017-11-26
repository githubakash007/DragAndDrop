import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragulaDndComponent } from './dragula-dnd.component';

describe('DragulaDndComponent', () => {
  let component: DragulaDndComponent;
  let fixture: ComponentFixture<DragulaDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragulaDndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragulaDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
