import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractUploadComponent } from './components/contract-upload/contract-upload.component';

const routes: Routes = [
  {path: '',
  component: ContractUploadComponent, data: {animation: 'ContractsPage'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
export const contractsRoutingComponents = [
  ContractUploadComponent
  ];
