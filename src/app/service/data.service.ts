import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpclient:HttpClient) { }

  getData(){
    return this.httpclient.get('http://127.0.0.1:8000/api/local');
  }
  getdueno(){
    return this.httpclient.get('http://127.0.0.1:8000/api/dueno');
  }
  getcat(){
    return this.httpclient.get('http://127.0.0.1:8000/api/categoria');
  }
  getsubcat(id:number){
    return this.httpclient.get('http://127.0.0.1:8000/api/sub/'+id);
  }
}
