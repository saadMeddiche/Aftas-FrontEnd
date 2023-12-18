import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Competition} from "../../../competition/models/competition";
import {CompetitionService} from "../../../competition/services/competition.service";
import {NotificationsService} from "../../../notifications/services/notifications.service";
import {Fish} from "../../../fish/models/fish";
import {FishService} from "../../../fish/service/fish.service";
import {HuntingService} from "../../services/hunting.service";
import {PaginatedFishesResponse} from "../../models/paginatedFishesResponse";
import {HuntingAddRequest} from "../../models/huntingAddRequest";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hunting-add',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './hunting-add.component.html',
  styleUrl: './hunting-add.component.scss'
})
export class HuntingAddComponent {

  public fishes: Fish[] = [];

  public huntedFishName: string | undefined = undefined;

  public newHunting : HuntingAddRequest = {
    fishId : undefined,
    weightOfHuntedFish : undefined,
    memberId : undefined,
    competitionId : undefined
  }

  public lookingFor: string = '';

  public totalPages: number = 0;

  public page: number = 0;

  public size: number = 5;

  constructor(
    protected fishService: FishService ,
    protected huntingService: HuntingService ,
    protected notificationService: NotificationsService ,
    protected activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    this.setCompetitionIdAndMemberId();
    this.getFishes();
  }

  public onSearch(){
    this.getFishes()
  }

  public onPageChange(n: number) {
    this.page += n;
    this.getFishes();
  }

  public setHuntedFish(id: number , name:string ){
    this.newHunting.fishId = id;
    this.huntedFishName = name;
  }

  public setCompetitionIdAndMemberId(){
    this.newHunting.competitionId = this.activatedRoute.snapshot.params['competitionId'];
    this.newHunting.memberId = this.activatedRoute.snapshot.params['participantId'];
  }

  public goBackDefault(){
    this.newHunting = {
      fishId : undefined,
      weightOfHuntedFish : undefined,
      memberId : undefined,
      competitionId : undefined
    };
    this.lookingFor = '';
    this.huntedFishName = undefined;
    this.getFishes()
  }

  public addHunting(){
      this.huntingService.addHunting(this.newHunting).subscribe(
        () =>{
          this.notificationService.show(["Hunting Added Successfully"] , "success");
         this.goBackDefault();
        },
        (HttpErrorResponse) => {
          this.notificationService.show(HttpErrorResponse.error , "error")
          console.log("Development Purpose Error :"+ HttpErrorResponse.error)
        }
      )
  }

  public getFishes(){
    this.fishService.searchFishes(this.lookingFor , this.page , this.size).subscribe(
      (PaginatedFishesResponse ) =>
      {
        this.fishes = PaginatedFishesResponse.content
        this.totalPages = PaginatedFishesResponse.totalPages
      }
      ,
      (HttpErrorResponse) => {
        this.notificationService.show(HttpErrorResponse.error , "error")
        console.log("Development Purpose Error :"+ HttpErrorResponse.error)
      }
    )
  }

}
