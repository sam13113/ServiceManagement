import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { HeaderStringService } from 'src/app/services/header-string.service';


@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
    ngAfterViewInit(): void {
    }
    constructor(private router: Router,private header: HeaderStringService) { }
    public showPortfolio(event: Event) {
        const id = (event.currentTarget as Element).id;
        this.header.changeMessage('Service Level Management | Portfolio Management | '+ id);
        this.router.navigateByUrl('/portfolio/' + id, { skipLocationChange: true });
    }
}
