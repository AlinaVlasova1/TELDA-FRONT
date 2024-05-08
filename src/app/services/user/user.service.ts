import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../model/user";
import {ApiOptions} from "../api-options";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(
      `${ApiOptions.baseApiUrl}api/user/`,
      { headers:
          new HttpHeaders()
            .set('Authorization', `${ApiOptions.authHeaderValue}`)
            .set('ApiKey', `${localStorage.getItem('user-private-token')}`)
      })
  }

  getAllUsers(): Observable<IUser[]> {
    const token = localStorage.getItem('user-private-token');
    return this.http.get<IUser[]>(
      `${ApiOptions.baseApiUrl}api/users/`,
      { headers:
          new HttpHeaders()
            .set('Authorization', `${ApiOptions.authHeaderValue}`)
            .set('ApiKey', `${token}`)
      })
  }
}