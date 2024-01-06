import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit{
  public count:number;
  constructor(){
    this.count =0;
  }

  public  ngOnInit(): void {
      
  }

  public increment(){
    this.count +=1;
  }

  public decrement(){
    this.count -=1;
  }
  
}
