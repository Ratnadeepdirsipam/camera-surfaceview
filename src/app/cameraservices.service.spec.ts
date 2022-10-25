import { TestBed } from '@angular/core/testing';

import { CameraservicesService } from './cameraservices.service';

describe('CameraservicesService', () => {
  let service: CameraservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CameraservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
