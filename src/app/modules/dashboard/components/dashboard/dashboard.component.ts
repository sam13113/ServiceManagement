import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { Router, RouterOutlet } from '@angular/router';
import {  routerTransition } from '../../../../animations/app-animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [ routerTransition()]
})
export class DashboardComponent implements OnInit {
  project$: object;

  constructor(private data: DataService, private router: Router) { }

    public showHomePage() {
    this.router.navigateByUrl('', { skipLocationChange: true });
  }
  ngOnInit() {
    this.data.getProject().subscribe(data => this.project$ = data);
  }
  prepareDashBoardRoute(outlet: RouterOutlet) {
    // outlet && outlet.activatedRouteData &&
    return  outlet.activatedRouteData.animation;
  }
}
