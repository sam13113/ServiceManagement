import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterEvent } from '@angular/router';
import {  routerTransition } from './animations/app-animations';
import { FacadeService } from './services/facade.service';

@Component({
  selector: 'app-root',
  template: `
  <app-load-screen></app-load-screen>
    <app-header></app-header>
   <div id="app-content" class="routeContainer" [@routerTransition]="prepareRoute(outlet)" >
  <router-outlet #outlet="outlet">
  </router-outlet>
  </div>
    <app-footer></app-footer>
  `,
  styles: [
    `
      #app-content {
        min-height: 70%;

      },
      .routeContainer{
        position:relative;
            }
    `
  ], animations: [ routerTransition]
})
export class AppComponent {
  public static title = 'Service Level Management | Portfolio Management';
  constructor(private router: Router, private facade: FacadeService) {
    router.events.subscribe((event: RouterEvent) => {
      this.facade.loadingScreenService.routernavigationEvent(event);
    });
  }
  prepareRoute(outlet: RouterOutlet) {
    // outlet && outlet.activatedRouteData &&
    return  outlet.activatedRouteData.animation;
  }
}
