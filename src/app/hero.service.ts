import { Injectable } from '@angular/core';
import { Product } from './interface/product';
import { Firestore, addDoc, collection, doc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private fs:Firestore) { }

  addProduct(product:Product){
    product.id = doc(collection(this.fs, 'id')).id;
    return addDoc(collection(this.fs, 'Products'), product);
  }
}
