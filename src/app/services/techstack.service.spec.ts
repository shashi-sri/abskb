import { TestBed } from '@angular/core/testing';

import { TechstackService } from './techstack.service';

describe('TechstackService', () => {
  let service: TechstackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechstackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
