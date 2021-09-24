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
    this.seo.setFacebookMetaTags(window.location.href,"Dogs and Cats","You love dogs and cats, Don't you?","https://dogsculture.com/wp-content/uploads/2019/02/labrador-retriever.jpg")
    this.seo.setTwitterMetaTags(window.location.href,"Dogs and Cats","You love dogs and cats, Don't you?","https://dogsculture.com/wp-content/uploads/2019/02/labrador-retriever.jpg")
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
