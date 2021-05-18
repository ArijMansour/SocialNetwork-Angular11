import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminkindergartenComponent } from './adminkindergarten.component';

describe('AdminkindergartenComponent', () => {
  let component: AdminkindergartenComponent;
  let fixture: ComponentFixture<AdminkindergartenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminkindergartenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminkindergartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
