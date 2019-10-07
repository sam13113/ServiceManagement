import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {  routerTransition } from '../../../../animations/app-animations';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [ routerTransition]
})
export class DashboardComponent implements OnInit {


  constructor( private router: Router) { }

    public showHomePage() {
    this.router.navigateByUrl('', { skipLocationChange: true });
  }
  ngOnInit() {

  }
  prepareDashBoardRoute(outlet: RouterOutlet) {
    // outlet && outlet.activatedRouteData &&
    return  outlet.activatedRouteData.animation;
  }
}
