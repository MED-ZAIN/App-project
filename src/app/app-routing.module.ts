import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeComponent } from './addemploye/addemploye.component';
import { AllemployeComponent } from './allemploye/allemploye.component';

const routes: Routes = [
  { path: '', redirectTo: '/Add-employe', pathMatch: 'full' }, 
  { path: 'Add-employe', component: AddemployeComponent },
  { path: 'All-employe', component: AllemployeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
