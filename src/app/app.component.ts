import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad2';


  constructor(private restService: RestService) {}

  onButtonClick(): void {
    this.restService.getData().subscribe(data => {
      console.log(data);
    });
  }


}
