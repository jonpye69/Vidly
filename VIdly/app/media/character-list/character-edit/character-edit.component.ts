import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Character } from '../../shared/character.model';
import { CharacterListService } from '../../shared/services/character-list.service';

@Component({
    selector: 'app-character-edit',
    templateUrl: './app/media/character-list/character-edit/character-edit.component.html'
})
export class CharacterEditComponent {
    name: string = '';
    age: number = null;

    @ViewChild('characterNameInput') characterNameInputRef: ElementRef;
    @ViewChild('characterAgeInput') characterAgeInputRef: ElementRef;

    constructor(private characterListService: CharacterListService) {
    }

    onClearForm() {
        this.name = '';
        this.age = null;
    }

    onAddCharacter(charForm: NgForm) {
        const charName = this.characterNameInputRef.nativeElement.value;
        const charAge = this.characterAgeInputRef.nativeElement.value;
        const newCharacter = new Character(charName, charAge);
        this.characterListService.addCharacter(newCharacter);

        this.name = '';
        this.age = null;
    }

}