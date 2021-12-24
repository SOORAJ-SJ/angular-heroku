import { Component, OnInit } from '@angular/core';
import { SeoserviceService } from '../seoservice.service';
import { RandomimageService } from 'src/app/randomimage.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  constructor(private seo:SeoserviceService, private random: RandomimageService) { }
  image:any;
  ngOnInit(): void {
    this.random.getRandomImage()
    .subscribe((result)=>{
      console.log(result);
      this.image= result;
      this.seo.setPrimaryMetaTags(this.image.created_at,this.image.description)
      this.seo.setFacebookMetaTags(window.location.href,this.image.created_at,this.image.description,this.image.urls.thumb)
      this.seo.setTwitterMetaTags(window.location.href,this.image.created_at,this.image.description,this.image.urls.thumb)
    })
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
    window.open("http://www.facebook.com/dialog/feed?app_id="+307674221261352+"&display=popup&link="+window.location.href+"/?x="+Math.random().toString(36).substring(2, 5)+"&redirect_uri="+window.location.href+"&caption=Just testing the captions&description=new description&picture=https://dogsculture.com/wp-content/uploads/2019/02/labrador-retriever.jpg")
  }
  twitterSharer(){
    console.log(window.location.href)
    window.open("https://twitter.com/intent/tweet?url="+window.location.href+"/?x="+Math.random().toString(36).substring(2, 5),"_blank")
  }
  lineSharer(){
    window.open("http://line.naver.jp/R/msg/text/?Cats are evil "+window.location.href+"/?x="+Math.random().toString(36).substring(2, 5),"_blank")
  }
  lineSharerDefault(){
    window.open("https://social-plugins.line.me/lineit/share?url="+window.location.href+"/?x="+Math.random().toString(36).substring(2, 5),"_blank")
  }
  
}
