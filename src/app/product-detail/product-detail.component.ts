import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product?:Product;

  constructor() { }

  ngOnInit(): void {
  }

}
