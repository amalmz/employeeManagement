import { TestBed } from '@angular/core/testing';

import { LeavedetailService } from './leavedetail.service';

describe('LeavedetailService', () => {
  let service: LeavedetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavedetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
