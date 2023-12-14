import {IdentityDocument} from "../enums/identityDocument";

export interface Member {
  id: number;
  name: string;
  familyName: string;
  accessionDate: string;
  nationality: string;
  identityDocument: IdentityDocument;
  identityNumber: string;

}
