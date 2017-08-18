import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Framework: {{ framework }}</h1>
            <h2>Version: {{ version }}</h2>
            <hr />
            <h2>Primary Logo Colour: {{ logoColour }}</h2>`
})
export class AppComponent {
    framework = 'AngularJS'; 
    version = '2'; 
    logoColour = 'Red';
}
