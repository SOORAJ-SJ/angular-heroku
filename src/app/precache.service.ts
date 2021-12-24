import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrecacheService {
  constructor(private http: HttpClient) { }


  precacheFb():Observable<any>{
    return this.http.post("https://graph.facebook.com/v12.0/me?fields=id%2Cname&scrapte=true&access_token=EAAEX0ZCyqMigBAL3HMgLqXkUZAsbIfZBDHvpJQF7hOfZB1vVfFHB0PZB6PNHtiNZCxLA7izZAVT0ZBz3OCUZAyTTTtFG3YyQreXo5Tc5tJm1RMkKcpKQEFjOKNkvZCajSTEjtu4VTH2yCTb3v2RFy5YWHTlxYR6gkZBu4CY6jZBVEdw8Bl249SuwiLbWaun7llqRcSt5223qo0cJcG850DNLZA2r130OMHQtLUZCAdKFFPevywXQG2dTBVei1n",{headers:{'content-type':'application/json'}})
  }
}
