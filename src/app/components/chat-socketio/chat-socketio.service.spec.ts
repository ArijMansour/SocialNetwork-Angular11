import { TestBed } from '@angular/core/testing';

import { ChatSocketioService } from './chat-socketio.service';

describe('ChatSocketioService', () => {
  let service: ChatSocketioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatSocketioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
