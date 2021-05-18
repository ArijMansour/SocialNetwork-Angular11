import { TestBed } from '@angular/core/testing';

import { ManagePostsService } from './manage-posts.service';

describe('ManagePostsService', () => {
  let service: ManagePostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagePostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
