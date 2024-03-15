import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = 'https://gfs.andtrentini.it/ws/';
  private bearerToken: any;
  private isLoggedIn = false;

  constructor(private httpClient: HttpClient) { }

  login(credentials: any) {
    this.httpClient.post(this.baseURL + 'login', credentials)
      .pipe(
        catchError((error) => {
          //console.log(error);
          return error;
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        /* this.bearerToken = response.token;
        this.isLoggedIn = true; */
      })
  }

  get BearerToken() {
    return this.bearerToken;
  }

  get IsLoggedIn() {
    return this.isLoggedIn;
  }
}
