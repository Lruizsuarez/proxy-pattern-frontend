import { VideoComponent } from './video/video.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'videos' , component : VideoComponent
  },{
    path: '', pathMatch: 'full', redirectTo: 'videos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
