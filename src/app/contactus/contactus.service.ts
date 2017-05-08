import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Contactus } from './contactus';

@Injectable()
export class ContactusService {

  serverUrl = "http://localhost:3000/api";
  constructor(private http: Http) { }

  headers = new Headers({'Content-Type': 'application/json'});

  getPosts(): Observable<Contactus[]>{
    let url = this.serverUrl + "/contactus";
    return this.http.get(url, {headers: this.headers}).map(res => res.json()).catch(err => {

      return Observable.throw(err);
    });
  }

  createPost(post: Contactus): Observable<any>{
    let url = this.serverUrl + "/contactus";
    return this.http.post(url, post, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    })
  }
}
