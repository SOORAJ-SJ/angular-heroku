import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrecacheService {
  constructor(private http: HttpClient) { }


  precacheFb():Observable<any>{
    return this.http.post("https://graph.facebook.com/v12.0/me?fields=id%2Cname&scrapte=true&access_token=EAAEX0ZCyqMigBAMiOCmInwu4FNSdx1HB6gXjwLVWa0mQXxa7Py2UZCjhb0XBHPvnN0upZAoLjJunMnExFRAMD224zEou2BuUGzg2bCfxqu6HhZAD7qGw1ha2x4wIp5oolatZBm3TSlmp7JdciMsqO0Y530XLAtYva5bQ50DnaUv0D5iDEtXkdzrY6wBG5VXshE47WjWkYGAZDZD",{})
  }
}
