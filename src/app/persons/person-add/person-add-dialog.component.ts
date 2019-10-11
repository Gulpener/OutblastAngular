import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Person } from '../person.model';
@Component({
  selector: 'app-person-add-dialog',
  templateUrl: './person-add-dialog.component.html',
  styleUrls: ['./person-add-dialog.component.scss']
})
export class PersonAddDialogComponent implements OnInit {
  addPersonForm;
  id: number;
  constructor(
    public dialogRef: MatDialogRef<PersonAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public person: Person,
    private formBuilder: FormBuilder) {
      this.id = person.id;
      this.addPersonForm = this.formBuilder.group(person);
    }

  ngOnInit() {
  }
    
  onCancel()
  {
    this.dialogRef.close();
  }

  onSubmit(person: Person)
  {
    person.id = this.id;
    this.dialogRef.close(person);
  }
}


