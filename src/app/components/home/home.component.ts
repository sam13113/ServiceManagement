import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderStringService } from 'src/app/services/header-string.service';
import { Globals } from 'src/app/common/constants/Globals';
import {  RoutingEnumConstants } from 'src/app/common/constants/app-constants';


@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
    ngAfterViewInit(): void {
    }
    constructor(private router: Router, private header: HeaderStringService, private globals: Globals) { }
    public showPortfolio(event: Event) {
        const id = (event.currentTarget as Element).id;
        this.header.changeMessage('Service Level Management | Portfolio Management | ' + id);
        this.globals.setRoutingConstant(RoutingEnumConstants.PORTFOLIO);
        this.router.navigateByUrl(this.globals.getRoutingObject().url, { skipLocationChange: true });
    }
}
