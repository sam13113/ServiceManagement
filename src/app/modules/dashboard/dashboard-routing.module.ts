import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'contracts',
        loadChildren: '../contracts/contracts.module#ContractsModule'
      },
      {
        path: 'service',
        loadChildren: '../service-record/service-record.module#ServiceRecordModule'
      },
      {
        path: '',
        loadChildren: '../dashboard-project/dashboard-project.module#DashboardProjectModule'
      }
    ], data: {animation: 'DashboardPage'}
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
