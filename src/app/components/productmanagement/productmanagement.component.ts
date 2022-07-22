import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-productmanagement',
  templateUrl: './productmanagement.component.html',
  styleUrls: ['./productmanagement.component.css']
})
export class ProductmanagementComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    });
  }

  ngOnInit(): void {
  }

}
