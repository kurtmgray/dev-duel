import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWinnerMenuComponent } from './select-winner-menu.component';

describe('SelectWinnerMenuComponent', () => {
  let component: SelectWinnerMenuComponent;
  let fixture: ComponentFixture<SelectWinnerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectWinnerMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectWinnerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
