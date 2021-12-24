import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrecacheService {
  constructor(private http: HttpClient) { }


  precacheFb():Observable<any>{
    return this.http.post("https://graph.facebook.com/v12.0/me?fields=id%2Cname&scrapte=true&access_token=EAAEX0ZCyqMigBAFzLkKnVw6GKZACJxmNGOZAgrgvs98R3hZCvF3iYATG0fPZBzOOEx8oLM0lnY0lPyR9bR88BaqGwjg0VjbtRYl99ZBdqvZA8h1rCJtz7JoKrwDYpN5n53ZCtnDhiMuLXAgHjmnlZB8w4TSlCdzyYXoBK2PZAQeMqg7OYIxpmksiZCTPr1u0ZCGowy1J51HOuaWhwgZDZD",{})
  }
}
