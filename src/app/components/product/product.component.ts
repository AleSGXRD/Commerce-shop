import { Component, Input } from '@angular/core';
import { Product } from '../../interface/Product';
import { Router } from '@angular/router';



@Component({
  selector: 'product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  public product?: Product;
  @Input()
  public index?: number;

  constructor(private router: Router){

  }

  seeDetail(){
    console.log('hello')
    this.router.navigate(['/detail/' + this.index?.toString()])
  }
}
