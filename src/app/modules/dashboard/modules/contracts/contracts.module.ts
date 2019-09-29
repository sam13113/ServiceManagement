import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsTableComponent } from './components/contracts-table/contracts-table.component';
import { ContractUploadComponent } from './components/contract-upload/contract-upload.component';



@NgModule({
  declarations: [ContractUploadComponent,  ContractsTableComponent],
  imports: [
    CommonModule
  ]
  , exports: [ContractUploadComponent]})
export class ContractsModule { }
