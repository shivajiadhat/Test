import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DisplayDataComponent } from './display-data/display-data.component';

const routes: Routes = [
  {path:'', component: MainComponent },
  {path:'displayData', component: DisplayDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
