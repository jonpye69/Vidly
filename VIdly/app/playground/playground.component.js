"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PlaygroundComponent = /** @class */ (function () {
    function PlaygroundComponent() {
        this.framework = 'Angular';
        this.version = '2.0';
        this.logoColour = 'Red';
        this.logoLetter = 'A';
        this.textInput = '';
        this.jumbotronText = 'Angular 4 Playground';
    }
    PlaygroundComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/playground/playground.component.html'
        })
    ], PlaygroundComponent);
    return PlaygroundComponent;
}());
exports.PlaygroundComponent = PlaygroundComponent;
//# sourceMappingURL=playground.component.js.map