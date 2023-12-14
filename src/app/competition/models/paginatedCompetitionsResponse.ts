import {Competition} from "./competition";

export interface PaginatedCompetitionsResponse {
  content: Competition[];
  totalPages: number;
}
