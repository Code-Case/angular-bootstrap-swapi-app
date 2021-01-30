import { TestBed } from '@angular/core/testing';

import { ActorResolverService } from './actors-list-resolver.service';

describe('DataResolverService', () => {
  let service: ActorResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
