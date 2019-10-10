import { Person } from './persons/person.model';
import { NgModule } from '@angular/core';

@NgModule({})
export class ExternalInfoModule
{
  
    private Persons: Person[] = [
        { id: 1, name: 'Gertjan Gielen', instrument: "Trombone" },
        { id: 2, name: 'Sophie de Gouw', instrument: "Euphonium" },
      ];

      public GetPersons()
      {
        return this.Persons;
      }

      public RemovePerson(person: Person) {
        this.Persons = this.Persons.filter(pers => pers.id != person.id);
      }
}