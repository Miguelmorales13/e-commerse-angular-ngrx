import { TestBed } from '@angular/core/testing';

import { ClientBackendService } from './client-backend.service';

describe('ClientBackendService', () => {
  let service: ClientBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
