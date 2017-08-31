"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var character_model_1 = require("../shared/character.model");
var CharacterListComponent = (function () {
    function CharacterListComponent() {
        this.characters = [
            new character_model_1.Character('Buzz Lightyear', 40),
            new character_model_1.Character('Woody', 25),
            new character_model_1.Character('Dr Rumack', 60)
        ];
    }
    CharacterListComponent.prototype.onCharacterAdded = function (character) {
        this.characters.push(character);
    };
    return CharacterListComponent;
}());
CharacterListComponent = __decorate([
    core_1.Component({
        selector: 'app-character-list',
        templateUrl: './app/media/character-list/character-list.component.html'
    })
], CharacterListComponent);
exports.CharacterListComponent = CharacterListComponent;
//# sourceMappingURL=character-list.component.js.map