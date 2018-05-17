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
var character_model_1 = require("../../shared/character.model");
var character_list_service_1 = require("../../shared/services/character-list.service");
var CharacterEditComponent = /** @class */ (function () {
    function CharacterEditComponent(characterListService) {
        this.characterListService = characterListService;
        this.name = '';
        this.age = null;
    }
    CharacterEditComponent.prototype.onClearForm = function () {
        this.name = '';
        this.age = null;
    };
    CharacterEditComponent.prototype.onAddCharacter = function (charForm) {
        var charName = this.characterNameInputRef.nativeElement.value;
        var charAge = this.characterAgeInputRef.nativeElement.value;
        var newCharacter = new character_model_1.Character(charName, charAge);
        this.characterListService.addCharacter(newCharacter);
        this.name = '';
        this.age = null;
    };
    __decorate([
        core_1.ViewChild('characterNameInput'),
        __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
    ], CharacterEditComponent.prototype, "characterNameInputRef", void 0);
    __decorate([
        core_1.ViewChild('characterAgeInput'),
        __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
    ], CharacterEditComponent.prototype, "characterAgeInputRef", void 0);
    CharacterEditComponent = __decorate([
        core_1.Component({
            selector: 'app-character-edit',
            templateUrl: './app/media/character-list/character-edit/character-edit.component.html'
        }),
        __metadata("design:paramtypes", [character_list_service_1.CharacterListService])
    ], CharacterEditComponent);
    return CharacterEditComponent;
    var _a, _b;
}());
exports.CharacterEditComponent = CharacterEditComponent;
//# sourceMappingURL=character-edit.component.js.map