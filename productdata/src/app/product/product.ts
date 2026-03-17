import { Component, OnInit } from '@angular/core';
import { Productservice } from '../product/productservice';
@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product implements OnInit {
  products: any[] = [];
  errorMessage = '';

  constructor(private productService: Productservice) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res.products;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error fetching products';
      },
    });
  }
  addProduct() {
    const newProduct = {
      title: 'New Product',
      description: 'Test product',
      category: 'test',
    };

    this.productService.addProduct(newProduct).subscribe({
      next: (res: any) => {
        console.log('Added:', res);
        this.products.push(res);
      },
      error: (err) => console.error(err),
    });
  }
}
