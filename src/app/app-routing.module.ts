import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgyptNewsComponent } from './components/egypt-news/egypt-news.component';
import { UsaNewsComponent } from './components/usa-news/usa-news.component';


const routes: Routes = [
  {path:"egypt",component:EgyptNewsComponent},
  {path:"usa",component:UsaNewsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
