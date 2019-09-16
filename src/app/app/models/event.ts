import { TypeElement } from './type-element';
import { Location } from './location';

export class Event {
  id: string;
  typeElement: TypeElement;
  price: string;
  freeEntry: boolean;
  geoLocation: Location;
  type?: string;
}
