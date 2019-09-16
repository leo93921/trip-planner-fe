import { RefType } from './ref-type';
import { Location } from './location';

export class TripStop {
  id: string;
  refType: RefType;
  refId: string;
  visitTime: Date;
  visitOrder: number;
  location: Location;
  warningPresent: boolean;
  warningMessages: string[];
  title?: string;
  shortDescription?: string;
}


