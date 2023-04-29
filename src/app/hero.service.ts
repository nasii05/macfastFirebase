import { Injectable } from '@angular/core';
import { Product } from './interface/product';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private fs:Firestore) { }

  addProduct(product:Product){
    product.id = doc(collection(this.fs, 'id')).id;
    return addDoc(collection(this.fs, 'Products'), product);
  }

  // get product
  getProducts():Observable<Product[]> {
    let productsRef = collection(this.fs, 'Products');
    return collectionData(productsRef, {'idField':'doc_id'}) as Observable<Product[]>
  }

  // get product details by id
  async getProductbyId(id:any):Promise<any>{
    let docRef = doc(this.fs, "Products", id);
    try{
      const docSDnap = await getDoc(docRef);

      if(docSDnap.exists()){
        return docSDnap.data();
      }
      else{
        console.log('Document is missing');
      }

    } catch(error){
      console.log(error);
    }
  }

  // update
  updateProduct(id:any, product:any){
    let docRef = doc(this.fs, "Products",id);
    return updateDoc(docRef, product);
  }

  // delete
  deleteProduct(id:any){
    let docRef = doc(this.fs, "Products",id);
    return deleteDoc(docRef);
  }



}
