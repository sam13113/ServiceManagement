import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatasourcingComponent } from './datasourcing/datasourcing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio/dashboard/datasourcing', component: DatasourcingComponent },
  { path: 'portfolio/dashboard', component: DashboardComponent },
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
  PortfolioComponent,
  DatasourcingComponent];
