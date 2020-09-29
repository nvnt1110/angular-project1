import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() productID: number;
  @Output() productIDChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
