import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fish} from "../models/fish";
import {PaginatedFishesResponse} from "../../hunting/models/paginatedFishesResponse";

@Injectable({
  providedIn: 'root'
})
export class FishService {

  private url = 'http://aftasbackend:8080/api/V1/fishes';

  constructor(private http: HttpClient) { }

  searchFishes(value: string , page: number , size: number): Observable<PaginatedFishesResponse>{
    return this.http.get<PaginatedFishesResponse>(this.url + "/search/" + value + "?page=" + page + "&size=" + size);
  }
}
