import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  RoutingEnumConstants } from 'src/app/common/constants/app-constants';
import { FacadeService } from 'src/app/services/facade.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dashboard-buttongrp',
  templateUrl: './dashboard-buttongrp.component.html',
  styleUrls: ['./dashboard-buttongrp.component.css']
})
export class DashboardButtongrpComponent implements OnInit {

  constructor(private router: Router, private facade: FacadeService) { }

  ngOnInit() {
  }
  showContractsPage() {
    this.facade.setRoutingConstant(RoutingEnumConstants.CONTRACTS);
    this.router.navigateByUrl(this.facade.getRoutingObject().url, { skipLocationChange: true });

}
}
