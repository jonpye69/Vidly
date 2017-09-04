"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var film_model_1 = require("../../films/film.model");
var FilmService = (function () {
    function FilmService() {
        this.filmSelected = new core_1.EventEmitter();
        this.films = [
            new film_model_1.Film('Toy Story 1', 'An animated story about toys that come to life', 'https://vignette3.wikia.nocookie.net/disney/images/1/13/Toy_Story.jpg/revision/latest?cb=20151003163558'),
            new film_model_1.Film('Aeroplane', 'An adult comedy with most of the film based on an aircraft', 'https://images-na.ssl-images-amazon.com/images/I/51HV97CDVQL.jpg'),
            new film_model_1.Film('Aeroplane', 'An adult comedy with most of the film based on an aircraft', 'https://images-na.ssl-images-amazon.com/images/I/51HV97CDVQL.jpg'),
            new film_model_1.Film('Aeroplane', 'An adult comedy with most of the film based on an aircraft', 'https://images-na.ssl-images-amazon.com/images/I/51HV97CDVQL.jpg')
        ];
    }
    FilmService.prototype.getFilms = function () {
        return this.films.slice();
    };
    return FilmService;
}());
exports.FilmService = FilmService;
//# sourceMappingURL=film.service.js.map