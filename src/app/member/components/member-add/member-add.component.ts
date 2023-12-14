import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {CompetitionAddRequest} from "../../../competition/models/competitionAddRequest";
import {CompetitionService} from "../../../competition/services/competition.service";
import {NotificationsService} from "../../../notifications/services/notifications.service";
import {MemberAddRequest} from "../../models/memberAddRequest";
import {MemberService} from "../../services/member.service";
import {IdentityDocument} from "../../enums/identityDocument";

@Component({
  selector: 'app-member-add',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './member-add.component.html',
  styleUrl: './member-add.component.scss'
})
export class MemberAddComponent {

  public newMember: MemberAddRequest = {
    name: '',
    familyName: '',
    accessionDate: '',
    nationality: '',
    identityDocument: IdentityDocument.CIN,
    identityNumber: '',
  }

  public identityDocuments  = Object.values(IdentityDocument);
  constructor(private competitionService: MemberService , private notificationService: NotificationsService) {}

  ngOnInit(){
    this.setDefaultMember();
  }

  onSubmit(){
    this.addMember();
  }

  private setDefaultMember(){
    this.newMember.name = '';
    this.newMember.familyName = '';
    this.newMember.accessionDate = this.getDefaultDate();
    this.newMember.nationality = 'Moroccan';
    this.newMember.identityDocument = IdentityDocument.CIN;
    this.newMember.identityNumber = '0000000000';
  }

  private getDefaultDate(): string{

    // Get Current Date
    let today = new Date();

    // Split it to two parts using 'T' as a separator
    let dateAndTime: string[] = today.toISOString().split('T');

    // return The first value of the array that is a date
    return dateAndTime[0];

  }


  addMember(){
    this.competitionService.addMember(this.newMember).subscribe(
      (competition) => {
        this.setDefaultMember();
        this.notificationService.show(['Member Added Successfully'] , 'success');
      },
      (HttpErrorResponse) => {
        console.log(HttpErrorResponse.error)
        this.notificationService.show(HttpErrorResponse.error , 'error');
      }
    )

  }
}
