import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Competition} from "../../competition/models/competition";
import {CompetitionAddRequest} from "../../competition/models/competitionAddRequest";
import {Member} from "../models/member";
import {MemberAddRequest} from "../models/memberAddRequest";
import {PaginatedMembersResponse} from "../models/paginatedMembersResponse";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiUrl = 'http://aftasbackend:8080/api/V1/members';

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(this.apiUrl);
  }

  searchMembers(value: string , page: number , size: number): Observable<PaginatedMembersResponse> {
    return this.http.get<PaginatedMembersResponse>(this.apiUrl + "/search/" + value + "?page=" + page + "&size=" + size);
  }


  addMember(member: MemberAddRequest) : Observable<Member>{
    return this.http.post<Member>(this.apiUrl , member , httpOptions);
  }
}
