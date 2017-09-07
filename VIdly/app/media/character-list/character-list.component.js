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
var character_list_service_1 = require("../shared/services/character-list.service");
var CharacterListComponent = (function () {
    function CharacterListComponent(characterListService) {
        this.characterListService = characterListService;
    }
    CharacterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.characters = this.characterListService.getCharacters();
        // subscribe to the event emitter in the character list service
        this.characterListService.charactersChanged
            .subscribe(function (characters) {
            _this.characters = characters;
        });
    };
    return CharacterListComponent;
}());
CharacterListComponent = __decorate([
    core_1.Component({
        selector: 'app-character-list',
        templateUrl: './app/media/character-list/character-list.component.html'
    }),
    __metadata("design:paramtypes", [character_list_service_1.CharacterListService])
], CharacterListComponent);
exports.CharacterListComponent = CharacterListComponent;
//# sourceMappingURL=character-list.component.js.map