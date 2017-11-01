import { Component, OnInit, NgZone } from '@angular/core';
import { Launch } from './launch.model';
import 'zone.js';
import { LaunchDataService } from './launch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  changeDetectionCount: number = 0;
  launches: Array<Launch> = [];
  selectedLaunch: Launch;

  constructor(
    private zone: NgZone,
    private launchDataService: LaunchDataService
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
      this.launchDataService.getLaunches().subscribe((response: Array<any>) => {
        this.zone.run(() => {
          this.launches = response.reverse();
        });
      });
    });
  }
}
