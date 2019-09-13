import { TripStop } from './trip-stop';
import { Experience } from './experience';

export class Itinerary extends Experience {
  stops: TripStop[];
  description: string;
}
