"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var character_model_1 = require("../character.model");
var CharacterListService = /** @class */ (function () {
    function CharacterListService() {
        this.charactersChanged = new core_1.EventEmitter();
        this.characters = [
            new character_model_1.Character('Private Ryan', 39),
            new character_model_1.Character('Sally Anne', 39)
        ];
    }
    CharacterListService.prototype.getCharacters = function () {
        return this.characters.slice();
    };
    CharacterListService.prototype.addCharacter = function (character) {
        this.characters.push(character);
        this.charactersChanged.emit(this.characters.slice());
    };
    CharacterListService.prototype.addCharacters = function (characters) {
        (_a = this.characters).push.apply(_a, characters);
        this.charactersChanged.emit(this.characters.slice());
        var _a;
    };
    return CharacterListService;
}());
exports.CharacterListService = CharacterListService;
//# sourceMappingURL=character-list.service.js.map