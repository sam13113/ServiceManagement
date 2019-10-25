import { Injectable, Injector } from '@angular/core';
import { HeaderStringService } from './header-string.service';
import { Observable } from 'rxjs';
import { LoadingScreenService } from './loadingscreen/loading-screen.service';
import { RouterEvent } from '@angular/router';
import { Globals } from '../common/constants/Globals';
import { RoutingEnumConstants, IRouteObject } from '../common/constants/app-constants';

@Injectable()
export class FacadeService {

  private _headerStringService: HeaderStringService;
  private _loadingScreenService: LoadingScreenService;
  private _globals: Globals;

  public get headerStringService(): HeaderStringService {
    if (!this._headerStringService) {
      this._headerStringService = this.injector.get(HeaderStringService);
    }
    return this._headerStringService;
  }

  public get loadingScreenService(): LoadingScreenService {
    if (!this._loadingScreenService) {
      this._loadingScreenService = this.injector.get(LoadingScreenService);
    }
    return this._loadingScreenService;
  }
  public get globals(): Globals{
    if(!this._globals){
      this._globals=this.injector.get(Globals);
    }
    return this._globals;
  }
  constructor(private injector: Injector) { }
  //methods from HeaderStringService
  public changeMessage(message: string): void {
    this.headerStringService.changeMessage(message);
  }

  public get messageSource(): Observable<string> {
    return this.headerStringService.messageSource;
  }
  //methods from LoadingScreenService
  public routernavigationEvent(event: RouterEvent): void {
    this.loadingScreenService.routernavigationEvent(event);
  }
  public startLoadingScreen(): void {
    this.loadingScreenService.startLoading();
  }
  public stopLoadingScreen(): void {
    this.loadingScreenService.stopLoading();
  }
//methods from Globals
public setRoutingConstant(routingConstant: RoutingEnumConstants): void {
this.globals.setRoutingConstant(routingConstant);
}
public getRoutingConstant(): RoutingEnumConstants {
return this.globals.getRoutingConstant();
}
public getPreviousPage(): IRouteObject {
  return this.globals.getPreviousPage();
}
public getRoutingObject(): IRouteObject {
return this.globals.getRoutingObject();
}
}
