import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Lca } from './lca';

@Injectable()
export class LcaService {

    serverUrl = "http://localhost:3000/api";
  constructor(private http: Http) { }

  headers = new Headers({'Content-Type': 'application/json'});

  getPosts(): Observable<Lca[]>{
    let url = this.serverUrl + "/lcas";
    return this.http.get(url, {headers: this.headers}).map(res => res.json()).catch(err => {

      return Observable.throw(err);
    });
  }

  createPost(post: Lca): Observable<any>{
    let url = this.serverUrl + "/lcas";
    return this.http.post(url, post, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    })
  }
}





