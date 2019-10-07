import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IProject } from './models/IProject';
import { ISubProject } from './models/ISubProject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getProject() {
    return this.http.get<IProject>('https://my-json-server.typicode.com/navas-infobreez/FakeServer/project');
  }
  getSubProjects() {
    return this.http.get<ISubProject>('https://my-json-server.typicode.com/navas-infobreez/FakeServer/subProject');
  }

}
