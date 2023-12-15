import {Member} from "../../member/models/member";
import {Competition} from "../../competition/models/competition";

export interface Ranking {

   id : number;

   rank : number;

   score : number;

   member : Member;

   competition: Competition;
}
