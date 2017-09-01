"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ServersComponent = (function () {
    function ServersComponent() {
        var _this = this;
        this.serverId = 10;
        this.serverStatus = 'offline';
        this.allowNewServer = false;
        this.serverCreationStatus = 'No server created';
        this.serverCreated = false;
        this.serverName = 'init server name';
        this.servers = ['Server 01', 'Server 02'];
        this.isDisplayDetails = true;
        this.details = [];
        this.username = '';
        // ---------------------------
        this.evenNumbers = [2, 4, 6, 8, 10];
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 3000);
    }
    ServersComponent.prototype.onOnlyEvenChange = function () {
        this.onlyEven = !this.onlyEven;
        this.hideOrShowText = this.onlyEven ? 'Show' : 'Hide';
        console.log('onlyEven value = ' + this.onlyEven);
    };
    // ---------------------------
    ServersComponent.prototype.ngOnInit = function () {
        this.onlyEven = false;
        this.hideOrShowText = 'Hide';
    };
    ServersComponent.prototype.getServerStatus = function () {
        return this.serverStatus;
    };
    ServersComponent.prototype.getAllowNewServerString = function () {
        return this.allowNewServer.toString();
    };
    ServersComponent.prototype.onCreateServer = function () {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server <b>' + this.serverName + '</b> was created!';
    };
    ServersComponent.prototype.onUpdateServerName = function (event) {
        this.serverName = event.target.value;
    };
    ServersComponent.prototype.onResetUsername = function () {
        this.username = '';
    };
    ServersComponent.prototype.onDisplayDetails = function () {
        this.isDisplayDetails = !this.isDisplayDetails;
        //this.details.push(this.details.length);
        this.details.push(new Date().toLocaleString());
    };
    return ServersComponent;
}());
ServersComponent = __decorate([
    core_1.Component({
        selector: 'app-servers',
        templateUrl: './app/playground/servers/servers.component.html',
        styles: ['.white-text { color: #fff; }']
    }),
    __metadata("design:paramtypes", [])
], ServersComponent);
exports.ServersComponent = ServersComponent;
//# sourceMappingURL=servers.component.js.map