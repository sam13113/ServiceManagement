import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IRouteObject, RoutingEnumConstants } from '../constants/app-constants';
import { FacadeService } from 'src/app/services/facade.service';

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
    private facade: FacadeService
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
    this.facade.setRoutingConstant(RoutingEnumConstants.HOME);
    this.checkHeaderStatus();
    this.router.navigateByUrl('', { skipLocationChange: true });
  }
  public goBack() {
    console.log(this.router.url);
    const routeObject: IRouteObject = this.facade.getPreviousPage();
    this.checkHeaderStatus();
    this.router.navigateByUrl(routeObject.url, { skipLocationChange: true });
    // this._location.back();
  }
  public checkHeaderStatus(): void {
const routingConstant = this.facade.getRoutingConstant() as RoutingEnumConstants;
if (routingConstant === RoutingEnumConstants.HOME) {
  this.facade.changeMessage('Service Level Management | Portfolio Management');
}
  }
  public getVisibility(): string {
    if (this.router.url === '/') {
      return 'hidden';
    }
    return 'visible';
  }

  private updateHeader(): void {
    this.subscription = this.facade.messageSource.subscribe(message => {
      this.title = message;
    });
  }
}
