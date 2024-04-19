import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRequestService } from '../../services/api-request.service';
import { map } from 'rxjs';
import { Product } from '../../interface/Product';
import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, UpperCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  public productDetail! : Product;
  public index : number =0;

  constructor(private route:ActivatedRoute,
    private apiRequest:ApiRequestService
  ){

    this.route.params.subscribe(
      params =>{
        const id = params['id'];
        this.index=id;

        this.apiRequest.getAll()
        .pipe(map((data: Product[])=> data[id] ))
        .subscribe(res => this.productDetail = res)
      }
    )
    window.scrollTo(0, 0);
  }
  ratingStar(upperTo:number) : string{
    if(this.productDetail.Reviews.rating >= upperTo)
      return 'filled';
    else
      return '';
  }
}
