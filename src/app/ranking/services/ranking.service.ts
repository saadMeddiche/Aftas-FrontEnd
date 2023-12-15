import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ranking} from "../models/ranking";
import {RankingAddRequest} from "../models/rankingAddRequest";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private apiUrl = 'http://localhost:8080/api/V1/rankings';

  constructor(private http: HttpClient) { }

  addRanking(rankingAddRequest: RankingAddRequest) : Observable<Ranking>{
    return this.http.post<Ranking>(this.apiUrl, rankingAddRequest , httpOptions);
  }
}
