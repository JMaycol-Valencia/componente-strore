import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../models/product.models'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input() producto: Producto = {
    id: '0',
    price: 0,
    image: '',
    name: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
