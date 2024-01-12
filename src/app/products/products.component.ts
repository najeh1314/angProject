import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  public check(obj: any) {
    obj.checked = !obj.checked;
  }
  products: Array<any> =[
    {id:1, name :"Computer",price:450.00, checked:false},
    {id:2, name :"Printer",price:50.00, checked:false},
    {id:3, name :"Phone",price:250.00, checked:false}
  ];
}
