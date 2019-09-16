import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Itinerary } from '../../models/itinerary';
import { Trip } from '../../models/trip';

@Component({
  selector: 'app-experience-table',
  templateUrl: './experience-table.component.html',
  styleUrls: ['./experience-table.component.css']
})
export class ExperienceTableComponent implements OnInit {

  @Input() type: string;
  @Input() elements: Itinerary[]|Trip[] = [];
  @Output() addPressed = new EventEmitter();
  @Output() deletePressed = new EventEmitter();
  @Output() itemPressed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleAdd() {
    this.addPressed.emit('');
  }

  isItineraryTable() {
    return this.type === 'ITINERARY';
  }

  delete(itinerary: Itinerary|Trip) {
    this.deletePressed.emit(itinerary);
  }

  itemPress(experience: Itinerary|Trip) {
    this.itemPressed.emit(experience);
  }

}
