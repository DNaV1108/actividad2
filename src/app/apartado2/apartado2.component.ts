import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-apartado2',
  templateUrl: './apartado2.component.html',
  styleUrls: ['./apartado2.component.css']
})
export class Apartado2Component {
  posts: any[] = [];

  constructor(private restService: RestService) { }

  onButtonClick(): void {
    this.restService.getPosts().subscribe(data => {
      this.posts = data.posts; 
    });
  }
}
