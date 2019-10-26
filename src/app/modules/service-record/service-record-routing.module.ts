import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasourcingComponent } from './components/datasourcing/datasourcing.component';
const routes: Routes = [
  {
    path: '',
    component: DatasourcingComponent, data: {animation: 'DatasourcingPage'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRecordRoutingModule { }
export const ServiceRecordRoutingComponents = [
  DatasourcingComponent
  ];
