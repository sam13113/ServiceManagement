import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsTableComponent } from './components/contracts-table/contracts-table.component';
import { ContractUploadComponent } from './components/contract-upload/contract-upload.component';
import { ContractsRoutingModule, contractsRoutingComponents} from './contracts-routing.module';



@NgModule({
  declarations: [contractsRoutingComponents,  ContractsTableComponent],
  imports: [
    CommonModule,
    ContractsRoutingModule
  ]
  })
export class ContractsModule { }
