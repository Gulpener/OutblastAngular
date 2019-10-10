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
  constructor(
    public dialogRef: MatDialogRef<PersonAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) {

      this.addPersonForm = this.formBuilder.group({
        name: '',
        instrument: ''
      });
    }

  ngOnInit() {
  }
    
  onCancel()
  {
    this.dialogRef.close();
  }

  onSubmit(person: Person)
  {
    this.dialogRef.close(person);
  }
}


