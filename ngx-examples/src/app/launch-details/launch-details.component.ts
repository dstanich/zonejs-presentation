import { Component, OnInit, Input } from '@angular/core';
import { Launch } from '../launch.model';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {

  @Input() launch: Launch;

  constructor() { }

  ngOnInit() {
  }

}
