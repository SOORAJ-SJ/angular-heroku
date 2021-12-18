import { Component, OnInit } from '@angular/core';
import { SeoserviceService } from '../seoservice.service'

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(private seo:SeoserviceService) { }

  ngOnInit(): void {
    this.seo.setPrimaryMetaTags("Cats","Cats are evil!")
    this.seo.setFacebookMetaTags(window.location.href,"Cats","Cats are evil!","https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80")
    this.seo.setTwitterMetaTags(window.location.href,"Cats","Cats are evil!","https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80")
    var head=document.getElementsByTagName('head')[0]
    var element=document.querySelector("link[rel='canonical'") || null
    if(element==null){
      var ele=document.createElement("link")
      head.appendChild(ele)
      ele.setAttribute('rel','canonical')
      ele.setAttribute('href',window.location.href)
    }
  }
  facebookSharer(){
    console.log(window.location.href)
    window.open("http://www.facebook.com/sharer/sharer.php?u="+window.location.href,"_blank")
  }
  twitterSharer(){
    console.log(window.location.href)
    window.open("https://twitter.com/intent/tweet?url="+window.location.href,"_blank")
  }
  lineSharer(){
    window.open("http://line.naver.jp/R/msg/text/?Cats are evil "+window.location.href,"_blank")
  }
  lineSharerDefault(){
    window.open("https://social-plugins.line.me/lineit/share?url="+window.location.href,"_blank")
  }
}
