import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  private apartado2Url = 'https://dummyjson.com/posts';
  private apartado3Url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPosts(): Observable<any> {  
    return this.http.get(this.apartado2Url);
  }

  getProducts(): Observable<any> { 
    return this.http.get(this.apartado3Url);
  }
  
}
