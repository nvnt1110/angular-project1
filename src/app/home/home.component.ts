import { Component, OnInit } from '@angular/core';

const arr = [
  {name: 'tan', age: 1},
  {name: 'toan', age: 3},
  {name: 'tinh', age: 2},
  {name: 'tuong', age: 4},
];

const obj = {
  name: 'hoang',
  age: 1,
  sex: true
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productID: number;

  constructor() { }

  ngOnInit(): void {
  }



}
