import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './app/playground/servers/servers.component.html',
  styles: ['.white-text { color: #fff; }']
})

export class ServersComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    allowNewServer: boolean = false;

    serverCreationStatus: string = 'No server created';
    serverCreated: boolean = false;
    serverName: string = 'init server name';
    servers = ['Server 01', 'Server 02'];

    isDisplayDetails: boolean = true;
    details: any = [];

    username: string = '';

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 3000);
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getAllowNewServerString() {
        return this.allowNewServer.toString();
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server <b>' + this.serverName + '</b> was created!';
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;

    }

    onResetUsername() {
        this.username = '';
    }

    onDisplayDetails() {
        this.isDisplayDetails = !this.isDisplayDetails;
        //this.details.push(this.details.length);
        this.details.push(new Date().toLocaleString());
    }

}
