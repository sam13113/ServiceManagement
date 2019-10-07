import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderStringService } from 'src/app/services/header-string.service';
import { Subscription } from 'rxjs';
import { Globals } from '../constants/Globals';
import { IRouteObject, RoutingEnumConstants } from '../constants/app-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title: string;
  private subscription: Subscription;
  constructor(
    private router: Router,
    private header: HeaderStringService,
    private globals: Globals
  ) {
    this.updateHeader();
  }

  ngOnInit() {
    this.updateHeader();
  }
  // to prevent memory leak unsubscribe
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  public showHomePage() {
    this.globals.setRoutingConstant(RoutingEnumConstants.HOME);
    this.checkHeaderStatus();
    this.router.navigateByUrl('', { skipLocationChange: true });
  }
  public goBack() {
    console.log(this.router.url);
    const routeObject: IRouteObject = this.globals.getPreviousPage();
    this.checkHeaderStatus();
    this.router.navigateByUrl(routeObject.url, { skipLocationChange: true });
    // this._location.back();
  }
  public checkHeaderStatus(): void {
const routingConstant = this.globals.getRoutingConstant() as RoutingEnumConstants;
if (routingConstant === RoutingEnumConstants.HOME) {
  this.header.changeMessage('Service Level Management | Portfolio Management');
}
  }
  public getVisibility(): string {
    if (this.router.url === '/') {
      return 'hidden';
    }
    return 'visible';
  }

  private updateHeader(): void {
    this.subscription = this.header.messageSource.subscribe(message => {
      this.title = message;
    });
  }
}
