import { Component, OnInit } from '@angular/core';
import { User } from 'src/Types/user';
import { Albums} from '../../../Types/albums';
import {Photos} from '../../../Types/photos';
import {DataService} from '../../../services/data.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private data: DataService) { }

  public photos: Photos[];

  ngOnInit() {
    this.data.getPhotos().subscribe(res => {this.photos = res.slice(0, 12 ); });
  }

}
