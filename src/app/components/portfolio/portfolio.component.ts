import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderStringService } from 'src/app/services/header-string.service';

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
  constructor(private route: ActivatedRoute, private router: Router, private header: HeaderStringService) {
// this.header.changeHeader('Service Level Management | Portfolio Management | DE');
   }
  ngOnInit() {}



  public showDashboard(event: Event) {
    this.router.navigateByUrl('/portfolio/dashboard', { skipLocationChange: true });
  }
}
