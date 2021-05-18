import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClubsComponent } from './show-clubs.component';

describe('ShowClubsComponent', () => {
  let component: ShowClubsComponent;
  let fixture: ComponentFixture<ShowClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowClubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
