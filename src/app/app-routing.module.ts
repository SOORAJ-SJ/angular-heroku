import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
  {path:'',component:CatComponent},
  {path:'dog',component:DogComponent},
  {path:'random',component:RandomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
