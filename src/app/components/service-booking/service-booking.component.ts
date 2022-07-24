import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServicemanagementService } from 'src/app/services/servicemanagement.service';
import { ServiceBookingDialogComponent } from '../service-booking-dialog/service-booking-dialog.component';

@Component({
  selector: 'app-service-booking',
  templateUrl: './service-booking.component.html',
  styleUrls: ['./service-booking.component.css']
})
export class ServiceBookingComponent implements OnInit {

  displayedColumns: string[] = ['id','productId', 'userId', 'reqDate', 'problem', 'description', 'status', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog:MatDialog, private router:Router, private api : ServicemanagementService) { }

  ngOnInit(): void {
    this.getAllBookings();
  }

  openBooking() {
    this.dialog.open(ServiceBookingDialogComponent, {
      width: '30%',
    }).afterClosed().subscribe(val => {
      if(val === 'Save') {
        this.getAllBookings();
      }
    })
  }




  getAllBookings() {
    this.api.getServiceBooking()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: () => {
          alert("Error while fetching the bookings");
        }
      })
    }

    editServiceBooking(row : any) {
    this.dialog.open(ServiceBookingDialogComponent, {
      width: '30%',
      data:row
    }).afterClosed().subscribe(val => {
      if(val === 'Update') {
        this.getAllBookings();
      }
    })
  }

  removeBooking(id : any) {
    this.api.deleteServiceBooking(id)
      .subscribe({
        next: (res) => {
          alert("Booking deleted successfully");
          this.getAllBookings();
        },
        error: () => {
          alert("Error while deleting the booking");
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
