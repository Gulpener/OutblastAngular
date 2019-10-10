import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  @Input() person: Person;
  @Output() deleted = new EventEmitter<Person>();
  constructor() { }

  ngOnInit() {
  }

  onDelete(){
    this.deleted.emit(this.person);
  }
}
