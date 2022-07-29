import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductmanagementService } from 'src/app/services/productmanagement.service';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-productmanagement',
  templateUrl: './productmanagement.component.html',
  styleUrls: ['./productmanagement.component.css']
})
export class ProductmanagementComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'make', 'model', 'cost', 'createdDate', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dialog:MatDialog, private router:Router, private api : ProductmanagementService ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  openProduct() {
    this.dialog.open(ProductDialogComponent, {
      width: '30%',
    }).afterClosed().subscribe(val => {
      if(val === 'Save') {
        this.getAllProducts();
      }
    })
  }    

  getAllProducts() {
    this.api.getProduct()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: () => {
          alert("Error while fetching the products");
        }
      })
    }

    editProduct(row : any) {
    this.dialog.open(ProductDialogComponent, {
      width: '30%',
      data:row
    }).afterClosed().subscribe(val => {
      if(val === 'Update') {
        this.getAllProducts();
      }
    })
  }
  
  removeProduct(id : number) {
    this.api.deleteProduct(id)
      .subscribe({
        next: (res) => {
          alert("Product deleted successfully");
          this.getAllProducts();
        },
        error: () => {
          alert("Error while deleting the product");
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
