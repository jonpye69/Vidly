import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './playground/user.service';
import { Utilities } from './media/shared/utilities.static';

@Component({
    selector: 'my-app',
    templateUrl: './app/links.component.html',
    providers: [UserService]
   //templateUrl: './app/app.component.html' 
  //template: `<ul>
  //    <li><a [routerLink] = "['/media']">Media</a></li>
  //    <li><a [routerLink] = "['/playground']">Playground</a></li>
  // </ul>
  // <router-outlet></router-outlet>`
})

export class AppComponent {
    framework = 'Angular';  
    version = '2.0'; 
    logoColour = 'Red'; 
    logoLetter = 'A';
    textInput = ''; 
    selectedParentOpt: string = '';

    
    ngOnInit() {
        this.selectedParentOpt = window.location.pathname.substring(1).toLowerCase() || Utilities.defaultParentMenuLocation;

        // This creates an error (using ActivatedRoute), and cant find the appropriate lifecycle hook to implement this within
        //this.selectedParentOpt = this.route.snapshot.url[0].path.toLowerCase() || Utilities.defaultParentMenuLocation;
    }
    
    onParentSelect(link: string) {
        this.selectedParentOpt = link;
    }

}
