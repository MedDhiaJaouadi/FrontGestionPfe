import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpfeComponent } from './addpfe/addpfe.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"addpfe", component:AddpfeComponent},
  {path:"", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
