import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ProductmanagementService } from 'src/app/services/productmanagement.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  productForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ProductmanagementService) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      cost: ['', Validators.required],
      createdDate: ['', Validators.required],
    })
  }
  addProduct() {
    if(this.productForm.valid){
    this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res) => {
          alert("Product added successfully")
        },
        error:()=>{
          alert("Error while adding the product")
        }
      })
    }
  }
}
