import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Competition} from "../models/competition";
import {Observable} from "rxjs";
import {CompetitionAddComponent} from "../componets/competition-add/competition-add.component";
import {CompetitionAddRequest} from "../models/competitionAddRequest";
import {PaginatedMembersResponse} from "../../member/models/paginatedMembersResponse";
import {PaginatedCompetitionsResponse} from "../models/paginatedCompetitionsResponse";
import {Member} from "../../member/models/member";
import {Rank} from "../models/rank";


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

  private apiUrl = 'http://aftasbackend:8080/api/V1/competitions';

  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<Competition[]>{

    return this.http.get<Competition[]>(this.apiUrl);
  }

  searchCompetitions(value: string , page: number , size: number): Observable<PaginatedCompetitionsResponse> {
    return this.http.get<PaginatedCompetitionsResponse>(this.apiUrl + "/search/" + value + "?page=" + page + "&size=" + size);
  }

  searchPendingCompetitions(value: string , page: number , size: number): Observable<PaginatedCompetitionsResponse> {
    return this.http.get<PaginatedCompetitionsResponse>(this.apiUrl + "/after/search/" + value + "?page=" + page + "&size=" + size);
  }

  searchClosedCompetitions(value: string , page: number , size: number): Observable<PaginatedCompetitionsResponse> {
    return this.http.get<PaginatedCompetitionsResponse>(this.apiUrl + "/before/search/" + value + "?page=" + page + "&size=" + size);
  }


  addCompetition(competition: CompetitionAddRequest) : Observable<Competition>{
    return this.http.post<Competition>(this.apiUrl , competition , httpOptions);
  }

  searchParticipantsOfCompetition(competitionId: number , value: string , page: number , size: number): Observable<PaginatedMembersResponse> {
    return this.http.get<PaginatedMembersResponse>(this.apiUrl + "/" + competitionId + "/participants/" + value + "?page=" + page + "&size=" + size);
  }


  calculateResults(competitionId: number): Observable<any>{
    return this.http.get<any>(this.apiUrl + "/results/" + competitionId);
  }

  getTopThree(competitionId: number): Observable<Rank> {
    return this.http.get<Rank>(this.apiUrl + "/topthree/" + competitionId);
  }

}
