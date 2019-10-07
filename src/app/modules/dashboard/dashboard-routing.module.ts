import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectContentComponent } from './modules/dashboard-project/components/project-content/project-content.component';
import { DatasourcingComponent } from './modules/service-record/components/datasourcing/datasourcing.component';
import { ContractUploadComponent } from './modules/contracts/components/contract-upload/contract-upload.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'contracts',
        component: ContractUploadComponent, data: {animation: 'ContractsPage'}
      },
      {
        path: 'service',
        component: DatasourcingComponent, data: {animation: 'DatasourcingPage'}
      },
      {
        path: '',
        component: ProjectContentComponent, data: {animation: 'DashboardPage'}
      }
    ], data: {animation: 'DashboardPage'}
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
