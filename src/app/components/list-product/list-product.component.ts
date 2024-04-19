import { Component } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { Product } from '../../interface/Product';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

  public responseData! : Product[]; 

  constructor(private apiRequest : ApiRequestService){
    this.apiRequest.getAll()
    .pipe(map((data: Product[])=> data.slice(0,12) ))
    .subscribe(
      res=>{
        this.responseData = res;
      }
    )
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
