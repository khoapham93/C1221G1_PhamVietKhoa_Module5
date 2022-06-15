import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  categoryDelete = {} as Category;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  getCategory(category: Category) {
    this.categoryDelete = category;
  }

  delete(categoryDelete: Category) {
    this.categoryService.deleteCategory(categoryDelete.id).subscribe(()=>{
      this.ngOnInit();
    });
  }
}
