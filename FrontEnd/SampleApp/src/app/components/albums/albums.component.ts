import { Component, OnInit } from '@angular/core';
import {Photos} from '../../../Types/photos';
import {DataService} from '../../../services/data.service';
import {User} from "../../../Types/user";
import {Albums} from "../../../Types/albums";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private data: DataService) { }

  public photos: Photos[];
  selectedAlbum: string [];
  selction: Photos;

  ngOnInit() {
    this.data.getPhotos().subscribe(res => {this.photos = res; });
  }
  getPhotosbyAlbum(albumId) {
    this.selectedAlbum = [];
    for (let i = 0; i < this.photos.length; i++) {
      if (albumId === this.photos[i]['albumId']) {
        console.log(this.photos[i]['albumId']);
        this.selectedAlbum.push(this.photos[i]['thumbnailUrl']);
      }
    }
  console.log(this.selectedAlbum); }

  onSelect(album: Photos): void {
    this.selction = album;
    const  album_id = this.selction.albumId;
    this.getPhotosbyAlbum(album_id);
  }
}
