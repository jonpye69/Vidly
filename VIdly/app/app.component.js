"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var users_service_1 = require("./playground/users.service");
var AppComponent = (function () {
    function AppComponent() {
        this.framework = 'Angular';
        this.version = '2.0';
        this.logoColour = 'Red';
        this.logoLetter = 'A';
        this.textInput = '';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/links.component.html',
        providers: [users_service_1.UserService]
        //templateUrl: './app/app.component.html' 
        //template: `<ul>
        //    <li><a [routerLink] = "['/Product']">Product</a></li>
        //    <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
        // </ul>
        // <router-outlet></router-outlet>`
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map