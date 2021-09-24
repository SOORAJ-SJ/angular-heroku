import { Injectable } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser'

@Injectable({
  providedIn: 'root'
})
export class SeoserviceService {

  constructor( private title:Title, private meta:Meta ) { }
  setPrimaryMetaTags(title:string,description:string){
    this.meta.addTags(
      [
        {name:"title",content:title},
        {name:"description",content:description}
      ]
    )
  }
  setFacebookMetaTags(url:string,title:string,description:string,image:string){
    this.meta.addTags(
      [
        {property:"og:type",content:"article"},
        {property:"og:url",content:url},
        {property:"og:title",content:title},
        {property:"og:description",content:description},
        {property:"og:image",content:image},
      ]
    )
  }
  setTwitterMetaTags(url:string,title:string,description:string,image:string){
    this.meta.addTags([
      {property:"twitter:card",content:"summary_large_image"},
      {property:"twitter:url",content:url},
      {property:"twitter:title",content:title},
      {property:"twitter:description",content:description},
      {property:"twitter:image",content:image},
    ])
  }
}
