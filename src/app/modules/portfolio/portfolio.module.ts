import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule, portfolioRoutingComponents } from './portfolio-routing.module';



@NgModule({
  declarations: [portfolioRoutingComponents],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
