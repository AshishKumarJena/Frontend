import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicemanagementService } from 'src/app/services/servicemanagement.service';

@Component({
  selector: 'app-service-report-dialog',
  templateUrl: './service-report-dialog.component.html',
  styleUrls: ['./service-report-dialog.component.css']
})
export class ServiceReportDialogComponent implements OnInit {

  serviceReportForm !: FormGroup;
  actionBtn : string = 'Save'
  constructor(
    private formBuilder: FormBuilder, 
    private api: ServicemanagementService, 
    @Inject(MAT_DIALOG_DATA) public editServiceReport: any, 
    private dialogRef : MatDialogRef<ServiceReportDialogComponent>) { }

  ngOnInit(): void {
    this.serviceReportForm = this.formBuilder.group({
      id: [''],
      reportId: ['', Validators.required],
      serReqId: ['', Validators.required],
      reportDate: ['', Validators.required],
      serviceType: ['', Validators.required],
      actionTaken: ['', Validators.required],
      diagnosisDetails: ['', Validators.required],
      isPaid: ['', Validators.required],
      visitFees: ['', Validators.required],
      repairDetails: ['', Validators.required],
    })

    if(this.editServiceReport){
      this.actionBtn = 'Update';
      this.serviceReportForm.controls['id'].setValue(this.editServiceReport.id);
      this.serviceReportForm.controls['reportId'].setValue(this.editServiceReport.reportid);
      this.serviceReportForm.controls['serReqId'].setValue(this.editServiceReport.serReqId);
      this.serviceReportForm.controls['reportDate'].setValue(this.editServiceReport.reportDate);
      this.serviceReportForm.controls['serviceType'].setValue(this.editServiceReport.serviceType);
      this.serviceReportForm.controls['actionTaken'].setValue(this.editServiceReport.actionTaken);
      this.serviceReportForm.controls['diagnosisDetails'].setValue(this.editServiceReport.diagnosisDetails);
      this.serviceReportForm.controls['isPaid'].setValue(this.editServiceReport.isPaid);
      this.serviceReportForm.controls['visitFees'].setValue(this.editServiceReport.visitFees);
      this.serviceReportForm.controls['repairDetails'].setValue(this.editServiceReport.repairDetails);
    }

  }

  addServiceReport() {
    if(!this.editServiceReport){
      if(this.serviceReportForm.valid){
    this.api.postServiceReport(this.serviceReportForm.value)
      .subscribe({
        next:(res) => {
          alert("Service Report added successfully")
          this.serviceReportForm.reset();
          this.dialogRef.close('Save');
        },
        error:()=>{
          alert("Error while adding the service report")
        }
      })
      }
    }else{
      this.updateServiceReport();
    }
  }

  updateServiceReport(){
    this.api.putServiceReport(this.serviceReportForm.value, this.editServiceReport.id)
      .subscribe({
        next:(res) => {
          alert("Service Report updated successfully")
          this.serviceReportForm.reset();
          this.dialogRef.close('Save');
        },
        error:()=>{
          alert("Error while updating the service report")
        }
      })
    }    


}
