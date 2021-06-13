import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardHrComponent } from './board-hr.component';

describe('BoardHrComponent', () => {
  let component: BoardHrComponent;
  let fixture: ComponentFixture<BoardHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardHrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
