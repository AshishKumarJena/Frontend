import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  openUser() {
    this.dialog.open(AddUserComponent, {
      width: '30%',
    });
  }

  ngOnInit(): void {
  }

}
