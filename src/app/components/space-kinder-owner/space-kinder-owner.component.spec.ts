import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceKinderOwnerComponent } from './space-kinder-owner.component';

describe('SpaceKinderOwnerComponent', () => {
  let component: SpaceKinderOwnerComponent;
  let fixture: ComponentFixture<SpaceKinderOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceKinderOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceKinderOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
