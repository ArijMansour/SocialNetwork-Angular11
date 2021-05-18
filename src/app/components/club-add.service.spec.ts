import { TestBed } from '@angular/core/testing';

import { ClubAddService } from './club-add.service';

describe('ClubAddService', () => {
  let service: ClubAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
