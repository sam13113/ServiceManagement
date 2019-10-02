import { Component, OnInit,  } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderStringService } from "src/app/services/header-string.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public title: string;
  private subscription: Subscription;
  constructor(private router: Router, private header: HeaderStringService) {
    this.updateHeader();
  }

  ngOnInit() {
    this.updateHeader();
  }
  //to prevent memory leak unsubscribe
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  public showHomePage() {
    this.router.navigateByUrl("", { skipLocationChange: true });
  }
  public goBack() {
    console.log(this.router.url);
    // this._location.back();
  }
  public getVisibility(): string {
    if (this.router.url == "/") {
      return "hidden";
    }
      return "visible";

  }

  private updateHeader(): void {

    this.subscription= this.header.messageSource.subscribe(
      (message)=>{
        this.title=message;
      }
    );

  }
}
