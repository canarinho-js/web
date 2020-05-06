import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { SetupComponent } from './pages/setup/setup.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'como-funciona', component: HowItWorksComponent },
  { path: 'instalacao', component: SetupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
