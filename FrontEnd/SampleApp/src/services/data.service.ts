import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Types/user';
import { Albums } from '../Types/albums';
import { Photos } from '../Types/photos';

@Injectable()
export class DataService {

  private baseUrl: string = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/users').pipe(map((res) => res));
  }
  public getTracks(): Observable<Albums[]> {
    return this.http.get<Albums[]>(this.baseUrl + '/albums').pipe(map((res) => res));
  }

  public getPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>(this.baseUrl + '/photos').pipe(map((res) => res));
  }
}
