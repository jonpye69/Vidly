import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './app/server/server.component.html' 
})

export class ServerComponent {
    make : String = 'Golf';
    model: String = 'tdi';
}