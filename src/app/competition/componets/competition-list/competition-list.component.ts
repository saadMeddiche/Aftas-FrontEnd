import { Component } from '@angular/core';
import {Competition} from "../../models/competition";
import {CompetitionService} from "../../services/competition.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-competition-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './competition-list.component.html',
  styleUrl: './competition-list.component.scss'
})
export class CompetitionListComponent {

  public competitions: Competition[] = [];

  public competitionsIsEmpty: boolean = true;

  constructor(private competitionService: CompetitionService) {}

  ngOnInit(){

    this.getCompetitions()
  }

  private getCompetitions(){
    this.competitionService.getCompetitions().subscribe(
      (competitions : Competition[]) =>
      {

        this.competitions = competitions
      }
      ,
      (HttpErrorResponse) => {

        if(HttpErrorResponse.status == 204){
          this.competitionsIsEmpty = true
        }
      }
    )
  }

}
