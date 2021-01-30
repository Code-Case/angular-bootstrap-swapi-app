import { TestBed } from '@angular/core/testing';

import { FilmsListResolverService } from './films-list-resolver.service';

describe('FilmsListResolverService', () => {
  let service: FilmsListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
