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
var utilities_static_1 = require("./shared/utilities.static");
var MediaComponent = /** @class */ (function () {
    function MediaComponent() {
        this.loadedOpt = utilities_static_1.Utilities.defaultMenuLocation;
    }
    MediaComponent.prototype.onNavigate = function (opt) {
        this.loadedOpt = opt;
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", String)
    ], MediaComponent.prototype, "loadedOpt", void 0);
    MediaComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/media/media.component.html'
        })
    ], MediaComponent);
    return MediaComponent;
}());
exports.MediaComponent = MediaComponent;
//# sourceMappingURL=media.component.js.map