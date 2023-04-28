import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {

  productForm:FormGroup;

  constructor(private fb:FormBuilder){
    this.productForm = this.fb.group({
      title:['', Validators.required],
      desc:['', Validators.required],
      price:['', Validators.required]
    })
  }

  updateProduct(){
    const product =  this.productForm.value;
    console.log(product);
    this.productForm.reset();

  }
}
