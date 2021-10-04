import { Component, OnInit, Inject, Injector, PLATFORM_ID } from '@angular/core';
import { SeoserviceService } from '../seoservice.service'
import { isPlatformBrowser,isPlatformServer } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId,private seo:SeoserviceService, private router:Router) { }

  ngOnInit(): void {
    if(isPlatformServer(this.platformId)){
      console.log("isPlatformServer cat");
    }
    this.seo.setPrimaryMetaTags("Cats","Cats are evil")
    this.seo.setFacebookMetaTags("http://social-media-icons.herokuapp.com"+this.router.url,"Cats","Cats are evil","https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697")
    this.seo.setTwitterMetaTags("http://social-media-icons.herokuapp.com"+this.router.url,"Cats","Cats are evil","https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697")
    // var head=document.getElementsByTagName('head')[0]
    // var element=document.querySelector("link[rel='canonical'") || null
    // if(element==null){
    //   var ele=document.createElement("link")
    //   head.appendChild(ele)
    //   ele.setAttribute('rel','canonical')
    //   ele.setAttribute('href',window.location.href)
    // }
  }
  facebookSharer(){
    console.log(window.location.href)
    window.open("http://www.facebook.com/sharer/sharer.php?u="+window.location.href,"_blank")
  }
  twitterSharer(){
    console.log(window.location.href)
    window.open("https://twitter.com/intent/tweet?url="+window.location.href,"_blank")
  }
  gmailSharer(){
    window.open("mailto:subject=Cats&body=cats are evil | http://social-media-icons.herokuapp.com"+this.router.url,"_blank")
  }

}
