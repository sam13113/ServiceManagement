import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectContentComponent } from './components/project-content/project-content.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectContentComponent, data: {animation: 'DashboardPage'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardProjectRoutingModule { }
export const DashboardProjectRoutingComponents = [
  ProjectContentComponent
  ];
