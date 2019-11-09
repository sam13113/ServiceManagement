import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {

  private _loading = false;
  loadingStatus: Subject<boolean> = new Subject();

  public get Loading(): boolean {
    return this._loading;
  }

  public set Loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }

 public startLoading() {
    this.Loading = true;
  }

  public stopLoading() {
    this.Loading = false;
  }
  public routernavigationEvent(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.Loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.Loading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.Loading = false;
    }
    if (event instanceof NavigationError) {
      this.Loading = false;
    }
  }
}
