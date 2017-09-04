"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var character_model_1 = require("../character.model");
var CharacterService = (function () {
    function CharacterService() {
        this.characters = [
            new character_model_1.Character('Buzz Lightyear', 40),
            new character_model_1.Character('Woody', 25),
            new character_model_1.Character('Dr Rumack', 60)
        ];
    }
    CharacterService.prototype.getCharacters = function () {
        return this.characters.slice();
    };
    return CharacterService;
}());
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map