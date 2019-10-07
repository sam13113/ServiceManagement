import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent , data: {animation: 'HomePage'} },
   { path: 'portfolio/dashboard', loadChildren:'./modules/dashboard/dashboard.module#DashboardModule'},
{ path: 'portfolio/:id', component: PortfolioComponent, data: {animation: 'PortfolioPage'} },
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
