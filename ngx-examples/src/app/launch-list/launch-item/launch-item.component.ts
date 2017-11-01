import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Launch } from '../../launch.model';

@Component({
  selector: 'app-launch-item',
  templateUrl: './launch-item.component.html',
  styleUrls: ['./launch-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchItemComponent implements OnInit {

  @Input() data: Launch;

  constructor() { }

  ngOnInit() {
  }

  getLaunchTitle(): string {
    return 'Launch ' + this.data.flight_number + ' using ' + this.data.rocket.rocket_name;
  }
}
