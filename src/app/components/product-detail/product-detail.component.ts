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

  constructor(private route:ActivatedRoute,
    private apiRequest:ApiRequestService
  ){

    this.route.params.subscribe(
      params =>{
        const id = params['id'];

        this.apiRequest.getAll()
        .pipe(map((data: Product[])=> data[id] ))
        .subscribe(res => this.productDetail = res)
        console.log(this.productDetail)
      }
    )
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ratingStar(upperTo:number) : string{
    if(this.productDetail.Reviews.rating >= upperTo)
      return 'filled';
    else
      return '';
  }
}