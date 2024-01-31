import { TestBed } from '@angular/core/testing';

import { NetworkcallService } from './networkcall.service';

describe('NetworkcallService', () => {
  let service: NetworkcallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkcallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
