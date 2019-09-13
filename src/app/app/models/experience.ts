import { Location } from './location';

export class Experience {
  id: string;
  title: string;
  maxBudget: number;
  budgetLevel: number;
  creationDate: Date;
  updateDate: Date;
  deleteDate: Date;
  startPoint: Location;
  endPoint: Location;
  userId: string;
}
