import { TestBed } from '@angular/core/testing';

import { MonthpipeService } from './monthpipe.service';

describe('MonthpipeService', () => {
  let service: MonthpipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthpipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
