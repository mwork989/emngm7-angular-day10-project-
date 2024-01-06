import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponentComponent } from './posts-component.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostServiceService } from 'src/app/services/post-service.service';
import { sample } from 'rxjs';

describe('PostsComponentComponent', () => {
  let component: PostsComponentComponent;
  let fixture: ComponentFixture<PostsComponentComponent>;
  let httpMock : HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsComponentComponent ],
      imports:[HttpClientTestingModule],
      providers:[PostServiceService]
    })
    .compileComponents();


  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(PostsComponentComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController)
    fixture.detectChanges();
  })


  it('should fetch posts on init - multiple request',()=>{
    const samplePosts = [
      { id: 1, title: 'Post 1', body: 'This is the first post' },
      { id: 2, title: 'Post 2', body: 'This is the second post' }
    ]
    component.ngOnInit();
    // const requestedAPI = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts')
    
    // expect(requestedAPI.request.method).toEqual('GET');
    // requestedAPI.flush(samplePosts)
    // expect(component.posts).toEqual(samplePosts)

    const requests  = httpMock.match('https://jsonplaceholder.typicode.com/posts');
    expect(requests.length).toBe(2)

    requests.forEach(request =>{
      expect(request.request.method).toBe('GET');
    request.flush(samplePosts);
    })

    expect(component.IncreasePost()).toBe(false)
  })

  afterEach(()=>{
    httpMock.verify();
  })

});
