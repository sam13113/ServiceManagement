import { Injectable } from '@angular/core';
import { RoutingEnumConstants, IRouteObject, RouteConfig } from './app-constants';


@Injectable()
export class Globals {
  private routingConstant: RoutingEnumConstants;
  private stack: RoutingEnumConstants[];
  constructor() {
    this.routingConstant = RoutingEnumConstants.HOME;
    this.stack = new Array();
  }

  public setRoutingConstant(routingConstant: RoutingEnumConstants): void {
    this.stack.push(this.routingConstant);
    this.routingConstant = routingConstant;
  }
  public getRoutingConstant(): RoutingEnumConstants {
    return this.routingConstant;
  }
  public getRoutingObject(): IRouteObject {
    return RouteConfig.getRouteObject(this.routingConstant);
  }
  public getPreviousPage(): IRouteObject {
    this.routingConstant = this.stack.pop();
    if (this.getRoutingObject().key === 'home') {
      this.stack.length = 0;
    }
    return this.getRoutingObject();


  }
}
