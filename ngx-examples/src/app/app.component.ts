import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Launch } from './launch.model';
import 'zone.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  changeDetectionCount: number = 0;
  launches: Array<Launch> = [];

  constructor(
    private zone: NgZone,
    private http: HttpClient
  ) {}

  ngOnInit() {
    console.log('Current zone', Zone.current);

    this.zone.onUnstable.subscribe(() => {
      console.log('Unstable');
    });

    this.zone.onMicrotaskEmpty.subscribe(() => {
      console.log('Microtask empty -- change detection is run');
      this.changeDetectionCount++;
    });

    this.zone.onStable.subscribe(() => {
      console.log('Stable. Change detection count: ', this.changeDetectionCount);
    });

    this.zone.runOutsideAngular(() => {
      this.http.get('http://localhost:3000/launches').subscribe(response => {
        console.log(response);
      });
    });
  }
}
