import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsaService {
  private url="https://newsapi.org/v2/top-headlines?country=us&apiKey=c7e29270c0db4e52982efd02b8b12f6f";
  constructor(private http:HttpClient) { }
  getNews():Observable<any>{
    return this.http.get(this.url);
  }
}
