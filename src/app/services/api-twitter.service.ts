import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiTwitterService {

  public conteudoPesquisa: any;

  private apiurl = 'https://cors-anywhere.herokuapp.com/api.twitter.com:443/oauth2/token';

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get(this.apiurl);
  }
}
