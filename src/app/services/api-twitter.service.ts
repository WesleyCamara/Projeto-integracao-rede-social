import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiTwitterService {
  public conteudoPesquisa: any;
  private apiurl = 'https://cors-anywhere.herokuapp.com/api.twitter.com:443/1.1/search/tweets.json?count=10&q=';
  private options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
       Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAPDWDQEAAAAAwhC8wAmvbpYad%2BFYLqXv4ep%2BWrE%3DoghUarbwC9b00RNDR5cK64XIt7qyWTm2j3StEjzaAxeASwfady'
    }
  };
  constructor(private http: HttpClient) { }
  getData(conteudo) {
    return this.http.get(this.apiurl + conteudo , this.options);
  }
}
