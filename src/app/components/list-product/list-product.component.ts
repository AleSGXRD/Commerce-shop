import { Component } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { Product } from '../../interface/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

  public responseData$!:Observable<Product[]>;

  constructor(private apiRequest : ApiRequestService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.responseData$ = this.apiRequest.getAll();
  }
}
