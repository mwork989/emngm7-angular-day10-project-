import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent  implements OnInit{
   public posts:any[];
   constructor(private postsService: PostServiceService){
        this.posts  = [];
   }  

   public ngOnInit(): void {
    this.postsService.getPosts().subscribe(data => {
      this.posts = data;
    });
   }

   public IncreasePost(){
     return false;
   }

}
