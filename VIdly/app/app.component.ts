import { Component } from '@angular/core';
import { UserService } from './playground/user.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/links.component.html',
    providers: [UserService]
   //templateUrl: './app/app.component.html' 
  //template: `<ul>
  //    <li><a [routerLink] = "['/Product']">Product</a></li>
  //    <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
  // </ul>
  // <router-outlet></router-outlet>`
})

export class AppComponent {
    framework = 'Angular';  
    version = '2.0'; 
    logoColour = 'Red'; 
    logoLetter = 'A';
    textInput = ''; 
}
