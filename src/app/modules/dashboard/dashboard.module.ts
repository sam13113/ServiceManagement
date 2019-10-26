import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TilesComponent } from './components/tiles/tiles.component';
import { DashboardButtongrpComponent } from './components/dashboard-buttongrp/dashboard-buttongrp.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
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

        ChartsModule,
        DashboardRoutingModule
    ],
    providers: []

})
export class DashboardModule { }
