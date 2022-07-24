import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductmanagementService } from 'src/app/services/productmanagement.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  productForm !: FormGroup;
  actionBtn : string = 'Save'
  constructor(private formBuilder: FormBuilder, 
    private api: ProductmanagementService,
    @Inject(MAT_DIALOG_DATA) public editProduct: any, 
    private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      cost: ['', Validators.required],
      createdDate: ['', Validators.required],
    })

    if(this.editProduct){
      this.actionBtn = 'Update';
      this.productForm.controls['id'].setValue(this.editProduct.id);
      this.productForm.controls['name'].setValue(this.editProduct.name);
      this.productForm.controls['make'].setValue(this.editProduct.make);
      this.productForm.controls['model'].setValue(this.editProduct.model);
      this.productForm.controls['cost'].setValue(this.editProduct.cost);
      this.productForm.controls['createdDate'].setValue(this.editProduct.createdDate);
    }
  }
  
  addProduct() {
  if(!this.editProduct){
    if(this.productForm.valid){
    this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res) => {
          alert("Product added successfully")
          this.productForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the product")
        }
      })
      }
    }else{
      this.updateProduct();
    }
  }
  updateProduct(){
    this.api.putProduct(this.productForm.value, this.editProduct.id)
    .subscribe({
      next:(res) => {
        alert("Product updated successfully")
        this.productForm.reset();
        this.dialogRef.close('Update');
      },
      error:()=>{
        alert("Error while updating the record")
      }
    })
  }
}
