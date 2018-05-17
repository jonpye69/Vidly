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
var ngx_bootstrap_1 = require("ngx-bootstrap");
var film_service_1 = require("../../shared/services/film.service");
var FilmListComponent = /** @class */ (function () {
    function FilmListComponent(filmService, modalService) {
        this.filmService = filmService;
        this.modalService = modalService;
    }
    FilmListComponent.prototype.ngOnInit = function () {
        this.films = this.filmService.getFilms();
    };
    FilmListComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    FilmListComponent = __decorate([
        core_1.Component({
            selector: 'app-film-list',
            templateUrl: './app/media/films/film-list/film-list.component.html'
        }),
        __metadata("design:paramtypes", [film_service_1.FilmService, typeof (_a = typeof ngx_bootstrap_1.BsModalService !== "undefined" && ngx_bootstrap_1.BsModalService) === "function" && _a || Object])
    ], FilmListComponent);
    return FilmListComponent;
    var _a;
}());
exports.FilmListComponent = FilmListComponent;
//# sourceMappingURL=film-list.component.js.map