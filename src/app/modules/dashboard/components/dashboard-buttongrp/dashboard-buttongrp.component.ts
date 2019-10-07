import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/common/constants/Globals';
import {  RoutingEnumConstants } from 'src/app/common/constants/app-constants';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dashboard-buttongrp',
  templateUrl: './dashboard-buttongrp.component.html',
  styleUrls: ['./dashboard-buttongrp.component.css']
})
export class DashboardButtongrpComponent implements OnInit {

  constructor(private router: Router, private globals: Globals) { }

  ngOnInit() {
  }
  showContractsPage() {
    this.globals.setRoutingConstant(RoutingEnumConstants.CONTRACTS);
    this.router.navigateByUrl(this.globals.getRoutingObject().url, { skipLocationChange: true });

}
}
