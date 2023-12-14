import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Competition} from "../../models/competition";
import {CompetitionAddRequest} from "../../models/competitionAddRequest";
import {CompetitionService} from "../../services/competition.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-competition-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './competition-add.component.html',
  styleUrl: './competition-add.component.scss'
})
export class CompetitionAddComponent {

    public newCompetition: CompetitionAddRequest = {
      date: '',
      startTime: '',
      endTime: '',
      numberOfParticipants: 0,
      location: '',
      amount: 0
    }
    constructor(private competitionService: CompetitionService) {}

  ngOnInit(){
    this.setDefaultCompetition();
  }

  onSubmit(){
    this.addCompetition();
  }

  private setDefaultCompetition(){
      this.newCompetition.date = this.getDefaultDate();
      this.newCompetition.startTime = '06:00';
      this.newCompetition.endTime = '17:00';
      this.newCompetition.numberOfParticipants = 1;
      this.newCompetition.location = '';
      this.newCompetition.amount = 0;
  }

  private getDefaultDate(): string{

      // Get Current Date
    let today = new Date();

    // Add The Days
    today.setDate(today.getDate() + 3);

    // Split it to two parts using 'T' as a separator
    let dateAndTime: string[] = today.toISOString().split('T');

    // return The first value of the array that is a date
    return dateAndTime[0];

  }


  addCompetition(){
    this.competitionService.addCompetition(this.newCompetition).subscribe(
      (competition) => {
        this.setDefaultCompetition();
      },
      (HttpErrorResponse) => {

      }
    )

  }
}
