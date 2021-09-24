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
    this.seo.updateTitle("Dogs are fun");
    this.seo.updateOgUrl(window.location.href)
    this.seo.updateDescription("You also like dogs, Dont you?")
    this.seo.updateImage("https://dogsculture.com/wp-content/uploads/2019/02/labrador-retriever.jpg")
    this.seo.updateStiteName()
    this.seo.twitterUpdateContent()
    this.seo.twitterUpdateSite()
    this.seo.twitterUpdateTitle("Dogs are fun")
    this.seo.twitterUpdateDescription("You also like dogs, Dont you?")
    this.seo.twitterUpdateImage("https://dogsculture.com/wp-content/uploads/2019/02/labrador-retriever.jpg")
    this.seo.twitterUpdateUrl(window.location.href)
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

}
