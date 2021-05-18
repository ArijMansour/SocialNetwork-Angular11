import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSpaceComponent } from './parent-space.component';

describe('ParentSpaceComponent', () => {
  let component: ParentSpaceComponent;
  let fixture: ComponentFixture<ParentSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
