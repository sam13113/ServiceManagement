import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectContentComponent } from './modules/dashboard-project/components/project-content/project-content.component';
import { DatasourcingComponent } from './modules/service-record/components/datasourcing/datasourcing.component';


const routes: Routes = [{

  path: '', component: DashboardComponent,
  children:[
    {
      path:'datasourcing', component:DatasourcingComponent
    },
    {
path:'', component: ProjectContentComponent,
    }

  ]

}];
@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class DashboardRoutingModule { }

