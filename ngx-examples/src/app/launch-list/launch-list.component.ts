import { Component, OnInit, Input } from '@angular/core';
import { Launch } from '../launch.model';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {

  @Input() launches: Array<Launch>;

  constructor() { }

  ngOnInit() {
  }

}
