import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HuntingAddRequest} from "../models/huntingAddRequest";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  private url = 'http://aftasbackend:8080/api/V1/huntings';
  constructor(private http : HttpClient) { }

  addHunting(hunting : HuntingAddRequest){
    return this.http.post(this.url, hunting , httpOptions);
  }
}
