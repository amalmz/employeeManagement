import { TestBed } from '@angular/core/testing';

import { LeavepipePipe } from './leavepipe.service';

describe('LeavepipeService', () => {
  let service: LeavepipePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavepipePipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
