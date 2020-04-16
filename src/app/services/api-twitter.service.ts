import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiTwitterService {

  public conteudoPesquisa: any;

  private url = 'https://jsonplaceholder.typicode.com/posts/';
  private options = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get(this.url, this.options);
  }
}


