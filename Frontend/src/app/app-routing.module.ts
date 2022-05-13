import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MatchViewComponent } from './components/match-view/match-view.component';
import { StatusPageComponent } from './components/status-page/status-page.component';
import { SwipeViewComponent } from './components/swipe-view/swipe-view.component';

const routes: Routes = [
  { path: 'match', component: MatchViewComponent},
  { path: 'swipe', component: SwipeViewComponent},
  { path: 'overview', component: StatusPageComponent},
  // { path: '**', component: LandingPageComponent},
  { path: '', component: SwipeViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
