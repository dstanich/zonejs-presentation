import { Component, OnInit, Input, NgZone, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Launch, Vehicle } from '../launch.model';
import { LaunchDataService } from '../launch-data.service';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit, OnChanges {

  @Input() launch: Launch;

  rocket: Vehicle;

  constructor(
    private launchDataService: LaunchDataService,
    private zone: NgZone,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.rocket = undefined;
  }

  fetchRocketDetails() {
    this.zone.runOutsideAngular(() => {
      this.launchDataService.getRocketDetails(this.launch.rocket)
        .subscribe((result: Vehicle) => {
          this.rocket = result;
          this.changeDetector.detectChanges();
        });
    });
  }
}
