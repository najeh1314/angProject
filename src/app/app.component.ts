import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  boutons: Array<any> = [
    {title: "home", "route":"/home", icon:"house"},
    {title: "products", "route":"/products", icon:"house"},
    {title: "home", "route":"/new-product", icon:"house"}
  ]
}
