import { Component } from '@angular/core';
import {Competition} from "../../models/competition";
import {CompetitionService} from "../../services/competition.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NotificationsService} from "../../../notifications/services/notifications.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-competition-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
    RouterLink
  ],
  templateUrl: './competition-list.component.html',
  styleUrl: './competition-list.component.scss'
})
export class CompetitionListComponent {

  public competitions: Competition[] = [];

  public lookingFor: string = '';

  public totalPages: number = 0;

  public page: number = 0;

  public size: number = 5;

  constructor(protected competitionService: CompetitionService , protected notificationService: NotificationsService) {}

  ngOnInit(){
    this.getCompetitions()
  }

  public onSearch(){
    this.getCompetitions()
  }

  public onPageChange(n: number) {
    this.page += n;
    this.getCompetitions();
  }

  public getCompetitions(){
    this.competitionService.searchCompetitions(this.lookingFor , this.page , this.size).subscribe(
      (PaginatedCompetitionsResponse ) =>
      {
        this.competitions = PaginatedCompetitionsResponse.content
        this.totalPages = PaginatedCompetitionsResponse.totalPages
      }
      ,
      (HttpErrorResponse) => {
        this.notificationService.show(HttpErrorResponse.error , "warning")
        console.log("Development Purpose Error :"+ HttpErrorResponse.error)
      }
    )
  }


  protected searchClosedCompetitions(){
    this.competitionService.searchClosedCompetitions(this.lookingFor ,this.page , this.size).subscribe(
      (PaginatedCompetitionsResponse ) =>{
        this.competitions = PaginatedCompetitionsResponse.content
        this.totalPages = PaginatedCompetitionsResponse.totalPages
      },
      (HttpErrorResponse) => {
        this.notificationService.show(HttpErrorResponse.error , "warning")
        console.log("Development Purpose Error :"+ HttpErrorResponse.error)
      }
    )
  }

  protected searchPendingCompetitions(){
    this.competitionService.searchPendingCompetitions(this.lookingFor ,this.page , this.size).subscribe(
      (PaginatedCompetitionsResponse ) =>{
        this.competitions = PaginatedCompetitionsResponse.content
        this.totalPages = PaginatedCompetitionsResponse.totalPages
      },
      (HttpErrorResponse) => {
        this.notificationService.show(HttpErrorResponse.error , "warning")
        console.log("Development Purpose Error :"+ HttpErrorResponse.error)
      }
    )
  }

}
