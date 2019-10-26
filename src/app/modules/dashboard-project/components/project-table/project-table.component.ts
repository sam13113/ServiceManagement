import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { Router } from '@angular/router';
import { ISubProject } from 'src/app/services/models/ISubProject';
import {  RoutingEnumConstants } from 'src/app/common/constants/app-constants';
import { FacadeService } from 'src/app/services/facade.service';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {
  subProjects$: ISubProject;

  constructor(private data: DataService, private router: Router, private facade: FacadeService) { }

  ngOnInit() {
    this.data.getSubProjects().subscribe(data => this.subProjects$ = data);
  }

  public showDatasourcing(event: Event) {
    this.facade.setRoutingConstant(RoutingEnumConstants.SERVICE);
    this.router.navigateByUrl(this.facade.getRoutingObject().url, { skipLocationChange: true });
  }

}
