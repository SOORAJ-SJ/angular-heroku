import { Component, OnInit } from '@angular/core';
import { SeoserviceService } from '../seoservice.service'

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  constructor(private seo:SeoserviceService) { }

  ngOnInit(): void {
    this.seo.setPrimaryMetaTags("Dogs and Cats","You love dogs and cats, Don't you?")
    this.seo.setFacebookMetaTags(window.location.href,"Dogs and Cats","You love dogs and cats, Don't you?","https://mexp-test-bucket.s3.ap-northeast-1.amazonaws.com/activityImages/16394622081931a06c0a2-3da6-4a32-9f49-2b2b8227a7a9")
    this.seo.setTwitterMetaTags(window.location.href,"Dogs and Cats","You love dogs and cats, Don't you?","https://mexp-test-bucket.s3.ap-northeast-1.amazonaws.com/activityImages/16394622081931a06c0a2-3da6-4a32-9f49-2b2b8227a7a9")
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
    console.log("http://www.facebook.com/dialog/feed?app_id="+307674221261352+"&display=popup&link="+window.location.href+"&redirect_uri="+window.location.href+"&caption=Just testing the captions&description=new description&picture=https://dogsculture.com/wp-content/uploads/2019/02/labrador-retriever.jpg")
    window.open("http://www.facebook.com/dialog/feed?app_id="+307674221261352+"&display=popup&link="+window.location.href+"&redirect_uri="+window.location.href+"&caption=Just testing the captions&description=new description&picture=https://dogsculture.com/wp-content/uploads/2019/02/labrador-retriever.jpg","_blank")
    
  }
  twitterSharer(){
    console.log(window.location.href)
    window.open("https://twitter.com/intent/tweet?url="+window.location.href,"_blank")
  }
  lineSharer(){
    window.open("http://line.naver.jp/R/msg/text/?Dogs are fun "+window.location.href,"_blank")
  }
  lineSharerDefault(){
    window.open("https://social-plugins.line.me/lineit/share?url="+window.location.href,"_blank")
  }
}
