import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightBoardComponent } from './highlight-board.component';

describe('HighlightBoardComponent', () => {
  let component: HighlightBoardComponent;
  let fixture: ComponentFixture<HighlightBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
