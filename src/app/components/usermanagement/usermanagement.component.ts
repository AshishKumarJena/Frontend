import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UsermanagementService } from 'src/app/services/usermanagement.service';
import { AddUserComponent } from '../add-user/add-user.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'password', 'mobile', 'mailId', 'registrationDate', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog:MatDialog, private router:Router, private api : UsermanagementService ) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  openUser() {
    this.dialog.open(AddUserComponent, {
      width: '30%',
    }).afterClosed().subscribe(val => {
      if(val === 'Save') {
        this.getAllUser();
      }
    })
  }

  getAllUser() {
    this.api.getUser()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: () => {
          alert("Error while fetching the users");
        }
      })
    }

  editUser(row : any) {
    this.dialog.open(AddUserComponent, {
      width: '30%',
      data:row
    }).afterClosed().subscribe(val => {
      if(val === 'Update') {
        this.getAllUser();
      }
    })
  }

  removeUser(id : number) {
    this.api.deleteUser(id)
      .subscribe({
        next: (res) => {
          alert("User deleted successfully");
          this.getAllUser();
        },
        error: () => {
          alert("Error while deleting the user");
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
