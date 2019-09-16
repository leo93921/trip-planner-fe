import { Location } from './location';
import { TypeElement } from './type-element';

export class PointOfInterest {
  id: string;
  shortDescription: string;
  geoLocation: Location;
  typeElement: TypeElement;
  type?: string;
}
