import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product = {} as Product;
  productForm: FormGroup;
  id: number;
  categories: Category[] = [];

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  };

  constructor(private productService: ProductService,
              private activeRoute: ActivatedRoute,
              private route: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    console.log(this.id);
    this.getProduct(this.id);
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    })
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        category: new FormControl(product.category),
        description: new FormControl(product.description),
      });
    });
  }

  submit() {
    this.product = this.productForm.value;
    this.product.id = this.id;
    this.productService.updateProduct(this.product).subscribe(() => {
      this.route.navigate(['/product/list']);
    }, e => {
      console.log(e);
      alert("Cập nhật Thất bại!");
    });
  }
}
