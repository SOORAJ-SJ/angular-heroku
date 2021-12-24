import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomimageService{

  constructor(private http: HttpClient) { }

  apiUrl:string = "https://api.unsplash.com/";

  getRandomImage():Observable<any>{
      return this.http.get(this.apiUrl+'photos/random',{headers:{'Authorization':'Client-ID QoZEW8n3_QwHnLZQQFWXiNLyyaJxXP0XSQD4T1nk_As'}});
  }
}
