import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Builder} from './second';
import 'rxjs/add/operator/map';

@Injectable()
export class SecondService {

  constructor(private http: Http) { }
  getBuilders() //retrieving builder service
  {
  return this.http.get('api/builders')
  .map(res=>res.json());
  }
  //add builder method
  addBuilder(newBuilder)
  {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('api/builder',newBuilder,{headers:headers})
    .map(res=>res.json());
  }
 
  
  
  }
  