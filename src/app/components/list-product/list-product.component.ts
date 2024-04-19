import { Component, TemplateRef, ViewContainerRef } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { Product } from '../../interface/Product';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [ProductComponent, FormsModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

  public responseData! : Product[]; 

  public search:string ="";

  public pageActive:number = 0;

  constructor(
    private apiRequest : ApiRequestService,
    private routerActived: ActivatedRoute,
    private router : Router,
  ){
    this.routerActived.params.subscribe(
      params =>{
        const page:number =Number.parseInt(params['page']);

        if(page)
          this.pageActive = page;

      }
    )
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };

    this.apiRequest.getAll()
    .pipe(map((data: Product[])=> data.slice(0 + (24 * this.pageActive),24 + (24 * this.pageActive)) ))
    .subscribe(
      res=>{
        this.responseData = res;
      }
    )
  }
  seePage(page:number){
    this.router.navigate(['/', page?.toString()])
    window.scrollTo(0, 0);
  }
}
