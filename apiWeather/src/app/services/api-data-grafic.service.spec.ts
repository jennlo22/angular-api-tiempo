import { TestBed } from '@angular/core/testing';

import { ApiDataGraficService } from './api-data-grafic.service';

describe('ApiDataGraficService', () => {
  let service: ApiDataGraficService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDataGraficService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
