import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostsComponentComponent } from './components/posts-component/posts-component.component';
import { PostServiceService } from './services/post-service.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PostsComponentComponent  // Include PostsComponent in the declarations
      ],
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule
      providers: [PostServiceService] // Provide the PostsService
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Welcome to My Angular App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to My Angular App');
  });

  // Add more tests as necessary
});
