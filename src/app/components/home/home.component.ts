import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {  RoutingEnumConstants } from 'src/app/common/constants/app-constants';
import { FacadeService } from 'src/app/services/facade.service';


@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
    ngAfterViewInit(): void {
    }
    constructor(private router: Router, private facade: FacadeService) { }
    public showPortfolio(event: Event) {
        const id = (event.currentTarget as Element).id;
        this.facade.changeMessage('Service Level Management | Portfolio Management | ' + id);
        this.facade.setRoutingConstant(RoutingEnumConstants.PORTFOLIO);
        this.router.navigateByUrl(this.facade.getRoutingObject().url, { skipLocationChange: true });
    }
}
