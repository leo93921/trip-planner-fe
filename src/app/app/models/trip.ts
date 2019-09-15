import { Experience } from './experience';
import { DayBag } from './day-bag';

export class Trip extends Experience {
  dayBags: DayBag[];
}
