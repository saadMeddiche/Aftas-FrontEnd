import {IdentityDocument} from "../enums/identityDocument";

export interface MemberAddRequest{
  name: string
  familyName: string
  accessionDate: string
  nationality: string
  identityDocument: IdentityDocument
  identityNumber: string
}
