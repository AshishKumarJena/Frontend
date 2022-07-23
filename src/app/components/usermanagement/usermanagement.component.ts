import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UsermanagementService } from 'src/app/services/usermanagement.service';
import { AddUserComponent } from '../add-user/add-user.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  displayedColumns: string[] = ['name', 'password', 'mobile', 'mailId', 'registrationDate'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog:MatDialog, private api : UsermanagementService ) { }

  openUser() {
    this.dialog.open(AddUserComponent, {
      width: '30%',
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.api.getAllUsers()
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: () => {
          alert("Error while fetching the users");
        }
      })
  }

}
