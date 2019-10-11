import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../person.model';
import { MatDialog } from '@angular/material/dialog';
import { PersonAddDialogComponent } from '../person-add/person-add-dialog.component';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  @Input() person: Person;
  @Output() deleted = new EventEmitter<Person>();
  @Output() updated = new EventEmitter<Person>();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onDelete(){
    this.deleted.emit(this.person);
  }

  onEdit(){
    this.dialog.open(PersonAddDialogComponent, {
      data: this.person
    }).afterClosed().subscribe(result => {
      console.log(result);
      this.updated.emit(result);
    });
  }
}
