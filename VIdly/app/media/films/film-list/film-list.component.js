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
var film_model_1 = require("../../films/film.model");
var FilmListComponent = (function () {
    function FilmListComponent() {
        this.films = [
            new film_model_1.Film('Toy Story 1', 'An animated story about toys that come to life', 'https://vignette3.wikia.nocookie.net/disney/images/1/13/Toy_Story.jpg/revision/latest?cb=20151003163558'),
            new film_model_1.Film('Aeroplane', 'An adult comedy with most of the film based on an aircraft', 'https://images-na.ssl-images-amazon.com/images/I/51HV97CDVQL.jpg')
        ];
        this.filmWasSelected = new core_1.EventEmitter();
    }
    FilmListComponent.prototype.onFilmSelected = function (filmEl) {
        this.filmWasSelected.emit(filmEl);
    };
    return FilmListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FilmListComponent.prototype, "filmWasSelected", void 0);
FilmListComponent = __decorate([
    core_1.Component({
        selector: 'app-film-list',
        templateUrl: './app/media/films/film-list/film-list.component.html'
    })
], FilmListComponent);
exports.FilmListComponent = FilmListComponent;
//# sourceMappingURL=film-list.component.js.map