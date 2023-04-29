import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {

  productForm:FormGroup;

  constructor(private fb:FormBuilder, private hero:HeroService){
    this.productForm = this.fb.group({
      title:['', Validators.required],
      desc:['', Validators.required],
      price:['', Validators.required]
    })
  }



  addProduct(){
    const product =  this.productForm.value;
    console.log(product);
    this.productForm.reset();
    this.hero.addProduct(product).then((res) => {
      if(res){
        console.log(res);
      }
    })
  }

}
