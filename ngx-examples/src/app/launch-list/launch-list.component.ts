import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Launch } from '../launch.model';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {

  @Input() launches: Array<Launch>;
  @Output() launchChange: EventEmitter<Launch> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
