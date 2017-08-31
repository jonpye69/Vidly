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
var film_model_1 = require("../../film.model");
var FilmItemComponent = (function () {
    function FilmItemComponent() {
        this.filmSelected = new core_1.EventEmitter();
    }
    FilmItemComponent.prototype.onSelected = function () {
        this.filmSelected.emit();
    };
    return FilmItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", film_model_1.Film)
], FilmItemComponent.prototype, "film", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FilmItemComponent.prototype, "filmSelected", void 0);
FilmItemComponent = __decorate([
    core_1.Component({
        selector: 'app-film-item',
        templateUrl: './app/media/films/film-list/film-item/film-item.component.html'
    })
], FilmItemComponent);
exports.FilmItemComponent = FilmItemComponent;
//# sourceMappingURL=film-item.component.js.map