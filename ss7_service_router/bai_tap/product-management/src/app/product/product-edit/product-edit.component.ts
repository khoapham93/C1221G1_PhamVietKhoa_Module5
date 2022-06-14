import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product = {} as Product;
  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private activeRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    console.log(this.id);
    this.product = this.productService.findById(this.id);
    console.log(this.product);
    this.productForm = new FormGroup({
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description),
    });
  }

  submit() {
    this.product = this.productForm.value;
    this.product.id = this.id;
    this.productService.updateProduct(this.product);
    this.route.navigate(['/product/list']);
  }
}
