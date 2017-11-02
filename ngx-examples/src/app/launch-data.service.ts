import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Launch } from './launch.model';

@Injectable()
export class LaunchDataService {

  private _apiPrefix = 'https://api.spacexdata.com/v1/';
  // private _apiPrefix = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  getLaunches(): Observable<Array<Launch>> {
    return this.http.get<Array<Launch>>(this._apiPrefix + 'launches');
  }
}
