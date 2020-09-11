import { TestBed } from '@angular/core/testing';

import { ServerService } from '../../services/server/server.service';

describe('ServerService ', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerService  = TestBed.get(ServerService );
    expect(service).toBeTruthy();
  });
});
