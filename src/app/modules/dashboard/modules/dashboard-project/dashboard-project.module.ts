import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinechartComponent } from './components/linechart/linechart.component';
import { DoughnutchartComponent } from './components/doughnutchart/doughnutchart.component';
import { ProjectTableComponent } from './components/project-table/project-table.component';
import { ChartsModule } from 'ng2-charts';
import { ProjectContentComponent } from './components/project-content/project-content.component';



@NgModule({
  declarations: [ProjectContentComponent, ProjectTableComponent,
    LinechartComponent,
    DoughnutchartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    ProjectContentComponent,
    // ProjectTableComponent,
    // LinechartComponent,
    // DoughnutchartComponent
  ]
})
export class DashboardProjectModule { }
