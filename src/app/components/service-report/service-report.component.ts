import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServicemanagementService } from 'src/app/services/servicemanagement.service';
import { ServiceReportDialogComponent } from '../service-report-dialog/service-report-dialog.component';

@Component({
  selector: 'app-service-report',
  templateUrl: './service-report.component.html',
  styleUrls: ['./service-report.component.css']
})
export class ServiceReportComponent implements OnInit {

  displayedColumns: string[] = ['id','reportId', 'serReqId', 'reportDate', 'serviceType', 'actionTaken', 'diagnosisDetails', 'isPaid', 'visitFees', 'repairDetails','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog:MatDialog, private router:Router, private api : ServicemanagementService) { }

  ngOnInit(): void {
    this.getAllReports();
  }

  openReport() {
    this.dialog.open(ServiceReportDialogComponent, {
      width: '30%',
    }).afterClosed().subscribe(val => {
      if(val === 'Save') {
        this.getAllReports();
      }
    })
  }

  getAllReports() {
    this.api.getServiceReport()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: () => {
          alert("Error while fetching the reports");
        }
      })
    }

    editServiceReport(row : any) {
    this.dialog.open(ServiceReportDialogComponent, {
      width: '30%',
      data:row
    }).afterClosed().subscribe(val => {
      if(val === 'Update') {
        this.getAllReports();
      }
    })
  }

  removeReport(id:any) {
    this.api.deleteServiceReport(id)
      .subscribe({
        next: (res) => {
          alert("Report deleted successfully");
          this.getAllReports();
        },
        error: () => {
          alert("Error while deleting the report");
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
