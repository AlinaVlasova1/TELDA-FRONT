import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAuthUser, IUser} from "../../model/user";
import {Observable} from "rxjs";
import {ApiOptions} from "../api-options";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(private http: HttpClient) {
  }

  authorizationUser(userObj: IAuthUser): Observable<IUser> {
    return this.http.post<IUser>(`${ApiOptions.baseApiUrl}api/sign-in/`, userObj);
  }
}
