import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincompComponent } from './components/maincomp/maincomp.component';

const routes: Routes = [
  {
      path: "",
      component : MaincompComponent ,
    },
  {
      path: "main",
      component : MaincompComponent ,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
