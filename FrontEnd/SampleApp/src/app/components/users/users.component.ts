import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { User } from 'src/Types/user';
import { Albums} from '../../../Types/albums';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private data: DataService) { }

  public users: User[];
  public users_tracks: Albums[];
  selectedUser: User;
  selectedAlbum: string [];

  ngOnInit() {
    this.data.getUsers().subscribe(r => this.users = r);
    this.data.getTracks().subscribe(res => {this.users_tracks = res; });
    /*console.log(this.getTracksbyId(7)); */
    console.log(this.users_tracks);
  }
  getTracksbyId(userId) {
    this.selectedAlbum = [];
    for (let i = 0; i < this.users_tracks.length; i++) {
      if (userId === this.users_tracks[i]['userId']) {
        console.log(this.users_tracks[i]['title']);
        this.selectedAlbum.push(this.users_tracks[i]['title']);
      }
    }
    }
 onSelect(user: User): void {
    this.selectedUser = user;
    const  user_id = this.selectedUser.id;
    this.getTracksbyId(user_id);
 }
}
