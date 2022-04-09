import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaysComponent } from './pays/pays.component';
import { ContinentsComponent } from './continents/continents.component';
const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'pays', component: PaysComponent},
  { path: 'continents', component: ContinentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
