import { Injectable } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser'

@Injectable({
  providedIn: 'root'
})
export class SeoserviceService {

  constructor( private title:Title, private meta:Meta ) { }
  updateTitle(title:string){
    this.title.setTitle(title)
  }
  updateOgUrl(url:string){
    this.meta.updateTag({name:'og:url',content:url})
  }
  updateDescription(desc:string){
    this.meta.updateTag({name:'description',content:desc})
  }
  updateImage(image:any){
    this.meta.updateTag({name:"og:image",content:image})
  }
}
