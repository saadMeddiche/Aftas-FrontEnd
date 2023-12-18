import {Fish} from "../../fish/models/fish";

export interface PaginatedFishesResponse {
  content: Fish[];
  totalPages: number;
}
