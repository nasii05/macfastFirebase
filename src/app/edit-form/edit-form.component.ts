import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {

  productForm:FormGroup;

  constructor(private fb:FormBuilder, private hero: HeroService){
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

  ngOnInit(){
    this.getDataById();
  }

  getDataById(){
    let id = localStorage.getItem('doc_id')
    this.hero.getProductbyId(id).then( (data:any) => {
      console.log(data);
       this.productForm = this.fb.group({
        title:data.title,
        desc:data.desc,
        price:data.price
       })
    })
  }


  }


