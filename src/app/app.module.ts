import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaysComponent } from './pays/pays.component';
import { ContinentsComponent } from './continents/continents.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing";
import { CountryComponent } from './pays/country/country.component';
import { PaysDetailsComponent } from './pays-details/pays-details.component';
import { NavigatorComponent } from './navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaysComponent,
    ContinentsComponent,
    HeaderComponent,
    CountryComponent,
    PaysDetailsComponent,
    NavigatorComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
