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
var character_model_1 = require("../character.model");
var character_list_service_1 = require("./character-list.service");
var FilmService = (function () {
    function FilmService(characterListService) {
        this.characterListService = characterListService;
        this.filmSelected = new core_1.EventEmitter();
        this.films = [
            new film_model_1.Film('Toy Story 1', 'An animated story about toys that come to life', 'https://vignette3.wikia.nocookie.net/disney/images/1/13/Toy_Story.jpg/revision/latest?cb=20151003163558', [new character_model_1.Character('Buzz Lightyear', 40), new character_model_1.Character('Woody', 25)]),
            new film_model_1.Film('Aeroplane', 'An adult comedy with most of the film based on an aircraft', 'https://images-na.ssl-images-amazon.com/images/I/51HV97CDVQL.jpg', [new character_model_1.Character('Dr Rumack', 60)]),
            new film_model_1.Film('Mad Max', 'A futuristic film with a bloke called max', 'https://resizing.flixster.com/fTAEk1f2vY3Ab-m_StjV5bpZejU=/206x305/v1.bTsxMTE5MTI3NjtqOzE3NDk5OzEyMDA7NTA5Ozc1NQ', [new character_model_1.Character('Mad Max', 39), new character_model_1.Character('Mental Mandy', 25)]),
            new film_model_1.Film('The Shining', 'A horror that is pretty scary', 'http://static.rogerebert.com/uploads/movie/movie_poster/the-shining-1980/large_zc5y5OwKSV9MDXpfWxwrOjyRHsq.jpg', [new character_model_1.Character('Mr Shining', 52)]),
            new film_model_1.Film('Saving Private Ryan', 'A war film with Tom Hanks', 'https://vignette.wikia.nocookie.net/savingprivateryan/images/a/a5/Saving_Private_Ryan_by_Narusargent.jpg/revision/latest?cb=20140111171311', [new character_model_1.Character('Captain Hanks', 38)])
        ];
    }
    FilmService.prototype.getFilms = function () {
        return this.films.slice();
    };
    FilmService.prototype.addCharsToCharList = function (characters) {
        this.characterListService.addCharacters(characters);
    };
    return FilmService;
}());
FilmService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [character_list_service_1.CharacterListService])
], FilmService);
exports.FilmService = FilmService;
//# sourceMappingURL=film.service.js.map