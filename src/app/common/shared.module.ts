import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FacadeService } from 'src/app/services/facade.service';
import { HeaderStringService } from '../services/header-string.service';
import { LoadingScreenService } from '../services/loadingscreen/loading-screen.service';
import { Globals } from './constants/Globals';
import { LoadScreenComponent } from './load-screen/load-screen.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent,LoadScreenComponent],
  imports: [
  CommonModule
  ], providers: [FacadeService,HeaderStringService,LoadingScreenService,Globals],
  exports: [HeaderComponent, FooterComponent,LoadScreenComponent]
})

export class SharedModule { }
