import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  RoutingEnumConstants } from 'src/app/common/constants/app-constants';
import { FacadeService } from 'src/app/services/facade.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // hard coded Pillar list
  public pillarArray = [
    {
      id: 1, name: 'Customer Platform'
    },
    {
      id: 2, name: 'Global Platform'
    },
    {
      id: 3, name: 'Cross-Pillar Platform'
    },
    {
      id: 4, name: 'IT Operations'
    }
  ];
  constructor(private route: ActivatedRoute, private router: Router, private facade: FacadeService) {

   }
  ngOnInit() {}



  public showDashboard(event: Event) {
    this.facade.setRoutingConstant(RoutingEnumConstants.DASHBOARD);
    this.router.navigateByUrl(this.facade.getRoutingObject().url, { skipLocationChange: true });
  }
}
