import { DatasourcingdetailsComponent } from './components/datasourcingdetails/datasourcingdetails.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDescriptionComponent } from './components/service-description/service-description.component';
import { KeyContactsComponent } from './components/key-contacts/key-contacts.component';
import { ServicesSLAComponent } from './components/services-sla/services-sla.component';
import { ServiceRecordRoutingModule, ServiceRecordRoutingComponents } from './service-record-routing.module';

@NgModule({
    declarations: [
      KeyContactsComponent,
        ServiceDescriptionComponent,
        ServiceRecordRoutingComponents,
        ServicesSLAComponent,
        DatasourcingdetailsComponent
    ],
    imports: [
        CommonModule,
        ServiceRecordRoutingModule

    ],
    providers: []

})
export class ServiceRecordModule { }
