import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomponentComponent } from './mycomponent.component';

describe('MycomponentComponent', () => {
  let component: MycomponentComponent;
  let fixture: ComponentFixture<MycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycomponentComponent ]
    })
    .compileComponents();

   
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(MycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have increment method and should increment count by 1',()=>{
    // referencing the component and calling the method
    component.increment();
    expect(component.count).toBe(1)
  })

  it('should have increment method and should decrease count by 1',()=>{
    // referencing the component and calling the method
    component.increment();
    component.decrement();
    expect(component.count).toBe(0)
  })

  
  it('should have decrement method and results in negative ',()=>{
    // referencing the component and calling the method
    component.decrement();
    component.decrement();
    expect(component.count).toBeLessThan(0)
  })
});
