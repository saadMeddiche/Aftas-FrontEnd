
import {MemberScore} from "./memberScore";

export interface Rank {
  [groupId: string]: MemberScore[];
}
