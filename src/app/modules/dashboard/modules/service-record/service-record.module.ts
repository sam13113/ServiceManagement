import { DatasourcingdetailsComponent } from './components/datasourcingdetails/datasourcingdetails.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasourcingComponent} from './components/datasourcing/datasourcing.component';
import { ServiceDescriptionComponent } from './components/service-description/service-description.component';
import { KeyContactsComponent } from './components/key-contacts/key-contacts.component';
import { ServicesSLAComponent } from './components/services-sla/services-sla.component';

@NgModule({
    declarations: [
      KeyContactsComponent,
        ServiceDescriptionComponent,
        DatasourcingComponent,
        ServicesSLAComponent,
        DatasourcingdetailsComponent
    ],
    imports: [
        CommonModule,

    ],
    providers: [],
    exports: [DatasourcingComponent]

})
export class ServiceRecordModule { }
