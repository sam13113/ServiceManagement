import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinechartComponent } from './components/linechart/linechart.component';
import { DoughnutchartComponent } from './components/doughnutchart/doughnutchart.component';
import { ProjectTableComponent } from './components/project-table/project-table.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardProjectRoutingModule, DashboardProjectRoutingComponents } from './dashboard-project-routing.module';



@NgModule({
  declarations: [DashboardProjectRoutingComponents, ProjectTableComponent,
    LinechartComponent,
    DoughnutchartComponent],
  imports: [
    CommonModule,
    ChartsModule,
    DashboardProjectRoutingModule
  ]

})
export class DashboardProjectModule { }
