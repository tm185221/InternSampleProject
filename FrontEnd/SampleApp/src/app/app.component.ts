import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SampleApp';
  constructor(private dataService: DataService) {
  }
  ngOnInit() {
    /*console.log(this.dataService.getUsers());
    console.log('Are we calling this method?'); */
  }
}


