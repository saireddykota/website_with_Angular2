import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Resume } from './resume';

@Injectable()
export class ResumeService {

  serverUrl = "http://localhost:3000/api";

  constructor(private http: Http) { }
   headers = new Headers({'Content-Type': 'application/json'});

  getPosts(): Observable<Resume[]>{
    let url = this.serverUrl + "/resume";
    return this.http.get(url, {headers: this.headers}).map(res => res.json()).catch(err => {

      return Observable.throw(err);
    });
  }

  createPost(post: Resume): Observable<any>{
    let url = this.serverUrl + "/resume";
    return this.http.post(url, post, {headers: this.headers}).map(res => res.json()).catch(err => {
      return Observable.throw(err);
    })
  }


}
