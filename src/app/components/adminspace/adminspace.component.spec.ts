import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminspaceComponent } from './adminspace.component';

describe('AdminspaceComponent', () => {
  let component: AdminspaceComponent;
  let fixture: ComponentFixture<AdminspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
