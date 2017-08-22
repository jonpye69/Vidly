import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './app/servers/servers.component.html'
})
export class ServersComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    allowNewServer: boolean = false;

    serverCreationStatus: string = 'No server created';
    serverCreated: boolean = false;
    serverName: string = 'init server name';

    username: string = '';

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getAllowNewServerString() {
        return this.allowNewServer.toString();
    }

    onCreateServer() {
        this.serverCreated = true;
        this.serverCreationStatus = 'Server <b>' + this.serverName + '</b> was created!';
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    onResetUsername() {
        this.username = '';
    }
}
