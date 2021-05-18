import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSocketioComponent } from './chat-socketio.component';

describe('ChatSocketioComponent', () => {
  let component: ChatSocketioComponent;
  let fixture: ComponentFixture<ChatSocketioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSocketioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSocketioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
