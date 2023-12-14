import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Competition} from "../models/competition";
import {Observable} from "rxjs";
import {CompetitionAddComponent} from "../componets/competition-add/competition-add.component";
import {CompetitionAddRequest} from "../models/competitionAddRequest";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private apiUrl = 'http://localhost:8080/api/V1/competitions';

  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<Competition[]>{

    return this.http.get<Competition[]>(this.apiUrl);
  }


  addCompetition(competition: CompetitionAddRequest) : Observable<Competition>{
    return this.http.post<Competition>(this.apiUrl , competition , httpOptions);
  }

}
