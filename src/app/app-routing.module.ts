import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
   { path: 'portfolio/dashboard', loadChildren: () => {
    return import('./modules/dashboard/dashboard.module').then(mod => mod.DashboardModule);
  } },
{ path: 'portfolio/:id', component: PortfolioComponent },
{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  PortfolioComponent
  ];
