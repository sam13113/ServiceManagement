import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './components/tiles/tiles.component';
import { DashboardButtongrpComponent } from './components/dashboard-buttongrp/dashboard-buttongrp.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardProjectModule } from './modules/dashboard-project/dashboard-project.module';
import { ServiceRecordModule } from './modules/service-record/service-record.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    declarations: [
      DashboardComponent,
        TilesComponent,
        DashboardButtongrpComponent

    ],
    imports: [
        CommonModule,
        DashboardProjectModule,
        ServiceRecordModule,
        ContractsModule,
        ChartsModule,
        DashboardRoutingModule
    ],
    providers: [],
    exports: [DashboardComponent]

})
export class DashboardModule { }
