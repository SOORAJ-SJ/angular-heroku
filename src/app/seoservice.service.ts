import { Injectable } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser'

@Injectable({
  providedIn: 'root'
})
export class SeoserviceService {

  constructor( private title:Title, private meta:Meta ) { }
  updateTitle(title:string){
    this.meta.updateTag({property:'og:title',content:title})
  }
  updateType(){
    this.meta.updateTag({property:"og:type",content:"article"})
  }
  updateOgUrl(url:string){
    this.meta.updateTag({property:'og:url',content:url})
  }
  updateDescription(desc:string){
    this.meta.updateTag({property:'og:description',content:desc})
  }
  updateImage(image:any){
    this.meta.updateTag({property:"og:image",content:image})
  }
  updateAppId(){
    this.meta.updateTag({property:"fb:app_id",content:"4602781033106611"})
  }
  updateStiteName(){
    this.meta.updateTag({property:"og:site_name",content:"Dogs and Cats"})
  }
  twitterUpdateContent(){
    this.meta.updateTag({name:"twitter:card",content:"summary_large_image"})
  }
  twitterUpdateTitle(title:string){
    this.meta.updateTag({name:"twitter:title",content:title})
  }
  twitterUpdateSite(){
    this.meta.updateTag({name:"twitter:site",content:"@Sooraj_SJ_"})
  }
  twitterUpdateDescription(desc:string){
    this.meta.updateTag({name:"twitter:description",content:desc})
  }
  twitterUpdateImage(image:string){
    this.meta.updateTag({name:"twitter:image",content:image})
  }
  twitterUpdateUrl(url:string){
    this.meta.updateTag({name:"twitter:url",content:url})
  }
}
