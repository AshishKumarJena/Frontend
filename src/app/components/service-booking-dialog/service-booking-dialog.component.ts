import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicemanagementService } from 'src/app/services/servicemanagement.service';

@Component({
  selector: 'app-service-booking-dialog',
  templateUrl: './service-booking-dialog.component.html',
  styleUrls: ['./service-booking-dialog.component.css']
})
export class ServiceBookingDialogComponent implements OnInit {

  serviceBookingForm !: FormGroup;
  actionBtn : string = 'Save'
  constructor(
    private formBuilder: FormBuilder, 
    private api: ServicemanagementService, 
    @Inject(MAT_DIALOG_DATA) public editServiceBooking: any, 
    private dialogRef : MatDialogRef<ServiceBookingDialogComponent>) { }

  ngOnInit(): void {
    this.serviceBookingForm = this.formBuilder.group({
      id: [''],
      productId: ['', Validators.required],
      userId: ['', Validators.required],
      reqDate: ['', Validators.required],
      problem: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
    })

    if(this.editServiceBooking){
      this.actionBtn = 'Update';
      this.serviceBookingForm.controls['id'].setValue(this.editServiceBooking.id);
      this.serviceBookingForm.controls['productId'].setValue(this.editServiceBooking.productId);
      this.serviceBookingForm.controls['userId'].setValue(this.editServiceBooking.userId);
      this.serviceBookingForm.controls['reqDate'].setValue(this.editServiceBooking.reqDate);
      this.serviceBookingForm.controls['problem'].setValue(this.editServiceBooking.problem);
      this.serviceBookingForm.controls['description'].setValue(this.editServiceBooking.description);
      this.serviceBookingForm.controls['status'].setValue(this.editServiceBooking.status);
    }
  }

  addServiceBooking() {
    if(!this.editServiceBooking){
      if(this.serviceBookingForm.valid){
    this.api.postServiceBooking(this.serviceBookingForm.value)
      .subscribe({
        next:(res) => {
          alert("Service Booking added successfully")
          this.serviceBookingForm.reset();
          this.dialogRef.close('Save');
          window.location.reload();
        },
        error:()=>{
          alert("Error while adding the service booking")
        }
      })
      }
    }else{
      this.updateServiceBooking();
    }
  }
  updateServiceBooking(){
    this.api.putServiceBooking(this.serviceBookingForm.value, this.editServiceBooking.id)
      .subscribe({
        next:(res) => {
          alert("Service Booking updated successfully")
          this.serviceBookingForm.reset();
          this.dialogRef.close('Update');
          window.location.reload();
        },
        error:()=>{
          alert("Error while updating the service booking")
        }
      })
  }

}
