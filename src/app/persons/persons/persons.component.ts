import { Person } from './../person.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonAddDialogComponent } from '../person-add/person-add-dialog.component';
import { ExternalInfoModule } from 'src/app/external-info.module';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  constructor(public dialog: MatDialog, public externalInfo: ExternalInfoModule) { }

  selectedPerson: Person = this.externalInfo.GetPersons()[0];

  get Persons()
  {
    return this.externalInfo.GetPersons();
  }

  ngOnInit() {
  }

  onSelect(person:Person)
  {
    this.selectedPerson = person;
  }

  onDeleted(person:Person)
  {
    this.externalInfo.RemovePerson(person)

    if(this.selectedPerson == person)
    {
      if(this.externalInfo.GetPersons().length!=0)
      {
        this.selectedPerson = this.externalInfo.GetPersons()[0];
      }
      else
      {
        this.selectedPerson = null;
      }
    }
  }

  onUpdated(person:Person)
  {
    this.externalInfo.UpdatePerson(person);
    this.selectedPerson = person;
  }

  onAdd()
  {
    this.dialog.open(PersonAddDialogComponent, {
      data: {name: "", instrument: ""}
    }).afterClosed().subscribe(result => {
      result.Id = this.externalInfo.GetPersons().length +1;
      this.externalInfo.GetPersons().push(result);
      this.selectedPerson = result;
    });
  }
}
