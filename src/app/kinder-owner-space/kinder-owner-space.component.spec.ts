import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinderOwnerSpaceComponent } from './kinder-owner-space.component';

describe('KinderOwnerSpaceComponent', () => {
  let component: KinderOwnerSpaceComponent;
  let fixture: ComponentFixture<KinderOwnerSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinderOwnerSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinderOwnerSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
