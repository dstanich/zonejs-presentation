import { TestBed, inject } from '@angular/core/testing';

import { LaunchDataService } from './launch-data.service';

describe('LaunchDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaunchDataService]
    });
  });

  it('should be created', inject([LaunchDataService], (service: LaunchDataService) => {
    expect(service).toBeTruthy();
  }));
});
