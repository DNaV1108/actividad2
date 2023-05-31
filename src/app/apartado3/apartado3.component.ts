import { Component } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-apartado3',
  templateUrl: './apartado3.component.html',
  styleUrls: ['./apartado3.component.css']
})
export class Apartado3Component {
  products: any[] = [];

  constructor(private restService: RestService) { }

  onButtonClick(): void {
    this.restService.getProducts().subscribe(data => {
      this.products = data.products; 
    });
  }

}
