import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private _location: Location) { }

  ngOnInit() {
  }
  public showHomePage() {
    this.router.navigateByUrl('', { skipLocationChange: true });
  }
  public goBack(){
    console.log(this.router.url);
    // this._location.back();
  }
  public getVisibility(): String {
    if( this.router.url=='/'){
      return "hidden";
    }else{
      return "visible";
    }
  }
}
