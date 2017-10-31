import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'zone.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

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
    });

    this.zone.onStable.subscribe(() => {
      console.log('Stable');
    });

    this.zone.runOutsideAngular(() => {
      this.http.get('https://api.spacexdata.com/v1/launches').subscribe(response => {
        console.log(response);
      });
    });
  }
}
