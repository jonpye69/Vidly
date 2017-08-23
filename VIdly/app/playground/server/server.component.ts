import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './app/playground/server/server.component.html',
    styles: ['.online { color: #fff; }']
})

export class ServerComponent {
    serverId : number = 10;
    serverStatus: string = 'offline';
    randomVal: number = 0;

    constructor() {
        this.randomVal = Math.random();
        this.serverStatus = this.randomVal > 0.5 ? 'online' : 'offline';
    }

    getColour() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}