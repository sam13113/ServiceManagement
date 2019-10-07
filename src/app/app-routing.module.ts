import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import {  RouteConfig } from 'src/app/common/constants/app-constants';

const routes: Routes = [
  { path: RouteConfig.homePageUrl, component: HomeComponent , data: {animation: 'HomePage'} },
   { path: RouteConfig.dashboardPageUrl, loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
{ path: RouteConfig.portfolioPageUrl, component: PortfolioComponent, data: {animation: 'PortfolioPage'} },
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
