import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../../../services/data.service';
import { Router } from '@angular/router';
import { ISubProject } from 'src/app/services/models/ISubProject';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {
  subProjects$: ISubProject;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getSubProjects().subscribe(data => this.subProjects$ = data);
  }

  public showDatasourcing(event: Event) {
    this.router.navigateByUrl('/portfolio/dashboard/datasourcing', { skipLocationChange: true });
  }

}
