import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../model/user";
import {ApiOptions} from "../api-options";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(
      `${ApiOptions.baseApiUrl}api/user/`,
      {
        headers:
          new HttpHeaders()
            .set('ApiKey', `${this.getToken()}`)
      })
  }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(
      `${ApiOptions.baseApiUrl}api/users/`,
      {
        headers:
          new HttpHeaders()
            .set('ApiKey', `${this.getToken()}`)
      })
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<IUser[]>(
      `${ApiOptions.baseApiUrl}api/user/${id}`,
      {
        headers:
          new HttpHeaders()
            .set('ApiKey', `${this.getToken()}`)
      })
  }

  getToken(): string {
    return localStorage.getItem('user-private-token');
  }
}
