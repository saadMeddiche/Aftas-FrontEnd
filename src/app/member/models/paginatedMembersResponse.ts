import {Member} from "./member";

export interface PaginatedMembersResponse{
  content: Member[];
  totalPages: number;
}
