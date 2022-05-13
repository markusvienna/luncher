import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MatchViewComponent } from './components/match-view/match-view.component';
import { StatusPageComponent } from './components/status-page/status-page.component';
import { SwipeViewComponent } from './components/swipe-view/swipe-view.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationViewComponent } from './components/swipe-view/location-view/location-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MatchViewComponent,
    StatusPageComponent,
    SwipeViewComponent,
    LocationViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
