import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpClient : HttpClient) {

  }

  public login(body : any) {
    return this.httpClient.post('https://api.codebyte-software.com:2323/api/users/login', body)
  }

  public register(body : any) {
    return this.httpClient.post('https://api.codebyte-software.com:2323/api/users/register', body)
  }
}
