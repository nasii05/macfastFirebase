import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  products!:Product[];


  constructor(private router:Router,private hero:HeroService){

  }

  ngOnInit(): void {
      this.getProducts();
  }

  getProducts(){
    this.hero.getProducts().subscribe((data:Product[]) => {
      console.log(data);
      this.products = data;
    })
  }


  addProduct(){
    console.log('add product works !');
    this.router.navigate(['/addform']);
  }

  editProduct(id:any){
    localStorage.setItem('doc_id', id);
    this.router.navigate(['/editform']);
  }


  deleteProduct(){
    console.log('delete works !');
  }

}
