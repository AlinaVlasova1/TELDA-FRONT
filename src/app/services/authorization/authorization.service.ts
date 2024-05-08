import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAuthUser, IUser} from "../../model/user";
import {Observable} from "rxjs";
import {ApiOptions} from "../api-options";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  token = 'Basic MTExNzU2MjA6NjAtZGF5ZnJlZXRyaWFs';
  constructor(private http: HttpClient) { }

  authorizationUser(userObj: IAuthUser): Observable<IUser> {
    return  this.http.post<IUser>(`${ApiOptions.baseApiUrl}api/sign-in/`, userObj,
      {headers: { 'Authorization': `${ApiOptions.authHeaderValue}` }});
  }
}
