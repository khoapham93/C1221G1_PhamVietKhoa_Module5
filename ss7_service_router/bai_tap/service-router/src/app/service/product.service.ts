import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 12',
      price: 2400000,
      description: 'New'
    }, {
      id: 2,
      name: 'IPhone 11',
      price: 1560000,
      description: 'Like new'
    }, {
      id: 3,
      name: 'IPhone X',
      price: 968000,
      description: '97%'
    }, {
      id: 4,
      name: 'IPhone 8',
      price: 7540000,
      description: '98%'
    }, {
      id: 5,
      name: 'IPhone 11 Pro',
      price: 1895000,
      description: 'Like new'
    }];

  constructor() {
  }

  findById(id: number) {
    return this.products.find(product => product.id == id);
  }

  getAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }
  updateProduct(product){
    for (let i = 0; i<this.products.length; i++){
      if (product.id == this.products[i].id){
        this.products[i] = product;
      }
    }
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(element => {
      return element.id != product.id;
    })
  }
}
