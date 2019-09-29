import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dashboard-buttongrp',
  templateUrl: './dashboard-buttongrp.component.html',
  styleUrls: ['./dashboard-buttongrp.component.css']
})
export class DashboardButtongrpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  showContractsPage(){
    this.router.navigateByUrl('portfolio/dashboard/contracts', { skipLocationChange: true });

}
}
