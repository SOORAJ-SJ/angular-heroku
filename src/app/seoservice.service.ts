import { Injectable } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser'

@Injectable({
  providedIn: 'root'
})
export class SeoserviceService {

  constructor( private title:Title, private meta:Meta ) { }
  setPrimaryMetaTags(title:string,description:string){
    this.meta.updateTag({name:"title",content:title})
    this.meta.updateTag({name:"description",content:description})
  }
  setFacebookMetaTags(url:string,title:string,description:string,image:string){
    this.meta.updateTag({property:"og:type",content:"article"})
    this.meta.updateTag({property:"og:url",content:url})
    this.meta.updateTag({property:"og:title",content:title})
    this.meta.updateTag({property:"og:description",content:description})
    this.meta.updateTag({property:"og:image",content:image})
  }
  setTwitterMetaTags(url:string,title:string,description:string,image:string){
    this.meta.updateTag({property:"twitter:card",content:"summary_large_image"})
    this.meta.updateTag({property:"twitter:url",content:url})
    this.meta.updateTag({property:"twitter:title",content:title})
    this.meta.updateTag({property:"twitter:description",content:description})
    this.meta.updateTag({property:"twitter:image",content:image})
  }
}
