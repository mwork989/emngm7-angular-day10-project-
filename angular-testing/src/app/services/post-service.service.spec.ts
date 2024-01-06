import { TestBed } from '@angular/core/testing';

import { PostServiceService } from './post-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('PostServiceService', () => {
  let service: PostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostServiceService]
    });
    service = TestBed.inject(PostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
