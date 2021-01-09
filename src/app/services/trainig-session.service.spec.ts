import { TestBed } from '@angular/core/testing';

import { TrainigSessionService } from './trainig-session.service';

describe('TrainigSessionService', () => {
  let service: TrainigSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainigSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
