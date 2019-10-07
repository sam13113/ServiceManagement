import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/services/models/IProject';
import { DataService } from 'src/app/services/data.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dashboard-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  project$: IProject;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getProject().subscribe(data => this.project$ = data);
  }

}
