import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsermanagementService } from 'src/app/services/usermanagement.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: UsermanagementService, private dialogRef : MatDialogRef<AddUserComponent>) { }

  ngOnInit(): void {
      this.userForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      mailId: ['', Validators.required],
      registrationDate: ['', Validators.required],
    })
  }
    addUser() {
    if(this.userForm.valid){
    this.api.postUser(this.userForm.value)
      .subscribe({
        next:(res) => {
          alert("User added successfully")
          this.userForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the user")
        }
      })
    }
  }

}
