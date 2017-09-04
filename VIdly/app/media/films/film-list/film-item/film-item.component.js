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
var film_service_1 = require("../../../shared/services/film.service");
var FilmItemComponent = (function () {
    function FilmItemComponent(filmService) {
        this.filmService = filmService;
    }
    FilmItemComponent.prototype.onSelected = function () {
        this.filmService.filmSelected.emit(this.film);
    };
    // If first or last film, add border radius appropriately so we dont end up with rounded borders on every element, only the first and last
    //getClasses() {
    //    return this.filmNumber === 0 ?
    //        this.className + ' border-radius-top-4' :
    //        (this.filmLength === this.filmNumber + 1 ? this.className + ' border-radius-bottom-4 no-top-border' : this.className + ' no-radius no-top-border');
    //}
    // This way - just to illustrate another way other than calling a function - here we set a property instead.
    FilmItemComponent.prototype.ngOnInit = function () {
        var initClassName = 'list-group-item clearfix';
        this.filmListItemClasses = this.filmNumber === 0 ?
            initClassName + ' border-radius-top-4' :
            (this.filmLength === this.filmNumber + 1 ? initClassName + ' border-radius-bottom-4 no-top-border' : initClassName + ' no-radius no-top-border');
    };
    return FilmItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", film_model_1.Film)
], FilmItemComponent.prototype, "film", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FilmItemComponent.prototype, "filmNumber", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FilmItemComponent.prototype, "filmLength", void 0);
FilmItemComponent = __decorate([
    core_1.Component({
        selector: 'app-film-item',
        templateUrl: './app/media/films/film-list/film-item/film-item.component.html'
    }),
    __metadata("design:paramtypes", [film_service_1.FilmService])
], FilmItemComponent);
exports.FilmItemComponent = FilmItemComponent;
//# sourceMappingURL=film-item.component.js.map