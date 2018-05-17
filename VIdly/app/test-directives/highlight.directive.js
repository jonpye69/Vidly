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
var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.defaultColour = 'transparent';
        this.changedColour = 'blue';
        this.backgroundColour = this.defaultColour;
    }
    HighlightDirective.prototype.ngOnInit = function () {
        this.backgroundColour = this.defaultColour;
    };
    HighlightDirective.prototype.mouseenter = function (eventData) {
        this.backgroundColour = this.changedColour;
    };
    HighlightDirective.prototype.mouseleave = function (eventData) {
        this.backgroundColour = this.defaultColour;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HighlightDirective.prototype, "defaultColour", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HighlightDirective.prototype, "changedColour", void 0);
    __decorate([
        core_1.HostBinding('style.backgroundColor'),
        __metadata("design:type", String)
    ], HighlightDirective.prototype, "backgroundColour", void 0);
    __decorate([
        core_1.HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "mouseenter", null);
    __decorate([
        core_1.HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "mouseleave", null);
    HighlightDirective = __decorate([
        core_1.Directive({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof core_1.Renderer2 !== "undefined" && core_1.Renderer2) === "function" && _b || Object])
    ], HighlightDirective);
    return HighlightDirective;
    var _a, _b;
}());
exports.HighlightDirective = HighlightDirective;
//# sourceMappingURL=highlight.directive.js.map