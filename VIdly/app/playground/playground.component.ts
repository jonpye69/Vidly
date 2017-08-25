import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/playground/playground.component.html'
})
export class PlaygroundComponent {
    framework = 'Angular';
    version = '2.0';
    logoColour = 'Red';
    logoLetter = 'A';
    textInput = ''; 
}