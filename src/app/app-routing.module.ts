import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddformComponent } from './addform/addform.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'addform', component:AddformComponent},
  {path: 'editform', component:EditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
