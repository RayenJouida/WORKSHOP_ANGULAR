import { TestBed } from '@angular/core/testing';

import { InovoiceServiceService } from './inovoice-service.service';

describe('InovoiceServiceService', () => {
  let service: InovoiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InovoiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
