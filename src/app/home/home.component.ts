import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router){

  }


  addProduct(){
    console.log('add product works !');

    this.router.navigate(['/addform'])
  }

  editProduct(){
    console.log('edit product works');
  }


  deleteProduct(){
    console.log('delete works !');
  }

}
