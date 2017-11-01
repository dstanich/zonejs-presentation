import { Component, OnInit, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Launch } from './launch.model';
import 'zone.js';
import { LaunchDataService } from './launch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  changeDetectionCount: number = 0;
  launches: Array<Launch> = [];
  selectedLaunch: Launch;

  constructor(
    private zone: NgZone,
    private launchDataService: LaunchDataService,
    private changeDetector: ChangeDetectorRef
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

    this.launchDataService.getLaunches().subscribe((response: Array<any>) => {
      this.launches = response.reverse();
      this.changeDetector.detectChanges();
    });
  }
}
