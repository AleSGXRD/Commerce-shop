import { Component, Input } from '@angular/core';
import { Product } from '../../interface/Product';

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
}
