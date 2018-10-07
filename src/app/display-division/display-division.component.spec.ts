import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDivisionComponent } from './display-division.component';

describe('DisplayDivisionComponent', () => {
  let component: DisplayDivisionComponent;
  let fixture: ComponentFixture<DisplayDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
