import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IRegUser} from "../../model/user";
import {Observable} from "rxjs";
import {ApiOptions} from "../api-options";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  postUser(userObj: IRegUser): Observable<any> {
    return this.http.post(`${ApiOptions.baseApiUrl}api/sign-up/`, userObj,
      {headers: {'Authorization': `${ApiOptions.authHeaderValue}`}})
  }

}
