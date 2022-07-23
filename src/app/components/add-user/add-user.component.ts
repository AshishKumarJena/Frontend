import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsermanagementService } from 'src/app/services/usermanagement.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm !: FormGroup;
  actionBtn : string = 'Save'
  constructor(private formBuilder: FormBuilder, 
    private api: UsermanagementService, 
    @Inject(MAT_DIALOG_DATA) public editUser: any, 
    private dialogRef : MatDialogRef<AddUserComponent>) { }

  ngOnInit(): void {
      this.userForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      mailId: ['', Validators.required],
      registrationDate: ['', Validators.required],
    })

    if(this.editUser){
      this.actionBtn = 'Update';
      this.userForm.controls['id'].setValue(this.editUser.id);
      this.userForm.controls['name'].setValue(this.editUser.name);
      this.userForm.controls['password'].setValue(this.editUser.password);
      this.userForm.controls['mobile'].setValue(this.editUser.mobile);
      this.userForm.controls['mailId'].setValue(this.editUser.mailId);
      this.userForm.controls['registrationDate'].setValue(this.editUser.registrationDate);
    }
  }
    
    addUser() {
    if(!this.editUser){
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
    }else{
      this.updateUser();
    }
  }
  updateUser(){
    this.api.putUser(this.userForm.value, this.editUser.id)
    .subscribe({
      next:(res) => {
        alert("User updated successfully")
        this.userForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the record")
      }
    })
  }

}
