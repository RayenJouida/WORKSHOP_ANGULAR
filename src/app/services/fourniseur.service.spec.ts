import { TestBed } from '@angular/core/testing';

import { FourniseurService } from './fourniseur.service';

describe('FourniseurService', () => {
  let service: FourniseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FourniseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
