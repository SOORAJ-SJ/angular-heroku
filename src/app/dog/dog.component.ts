import { Component, OnInit,Inject,Injectable,PLATFORM_ID } from '@angular/core';
import { SeoserviceService } from '../seoservice.service';
import { isPlatformServer } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId,private seo:SeoserviceService, private router:Router) { }

  ngOnInit(): void {
    if(isPlatformServer(this.platformId)){
      console.log("isPlatformServer dog");
    }
    this.seo.setPrimaryMetaTags("Dogs and Cats","You love dogs and cats, Don't you?")
    this.seo.setFacebookMetaTags("http://social-media-icons.herokuapp.com/"+this.router.url,"Dogs and Cats","You love dogs and cats, Don't you?","https://dogsculture.com/wp-content/uploads/2019/02/labrador-retriever.jpg")
    this.seo.setTwitterMetaTags("http://social-media-icons.herokuapp.com/"+this.router.url,"Dogs and Cats","You love dogs and cats, Don't you?","https://dogsculture.com/wp-content/uploads/2019/02/labrador-retriever.jpg")
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
    console.log("http://www.facebook.com/dialog/feed?app_id="+4602781033106611+"&display=popup&link="+window.location.href+"&redirect_uri="+window.location.href+"&caption=Just testing the captions&description=new description&picture=https://dogsculture.com/wp-content/uploads/2019/02/labrador-retriever.jpg")
    window.open("http://www.facebook.com/dialog/feed?app_id="+4602781033106611+"&display=popup&link="+window.location.href+"&redirect_uri="+window.location.href+"&caption=Just testing the captions&description=new description&picture=https://dogsculture.com/wp-content/uploads/2019/02/labrador-retriever.jpg","_blank")
    
  }
  twitterSharer(){
    console.log(window.location.href)
    window.open("https://twitter.com/intent/tweet?url="+window.location.href,"_blank")
  }

}
