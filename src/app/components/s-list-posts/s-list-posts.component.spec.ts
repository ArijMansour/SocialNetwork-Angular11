import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SListPostsComponent } from './s-list-posts.component';

describe('SListPostsComponent', () => {
  let component: SListPostsComponent;
  let fixture: ComponentFixture<SListPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SListPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SListPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
