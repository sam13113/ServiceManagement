import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  RouteConfig } from 'src/app/common/constants/app-constants';

const routes: Routes = [
  { path: RouteConfig.homePageUrl, loadChildren: './modules/home/home.module#HomeModule' },
   { path: RouteConfig.dashboardPageUrl, loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
{ path: RouteConfig.portfolioPageUrl, loadChildren: './modules/portfolio/portfolio.module#PortfolioModule' },
{ path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

