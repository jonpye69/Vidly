import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Character } from '../../shared/character.model';

@Component({
    selector: 'app-character-edit',
    templateUrl: './app/media/character-list/character-edit/character-edit.component.html'
})
export class CharacterEditComponent {
    name: string = '';
    age: number = null;

    @ViewChild('characterNameInput') characterNameInputRef: ElementRef;
    @ViewChild('characterAgeInput') characterAgeInputRef: ElementRef;
    @Output() characterAdded = new EventEmitter<Character>();

    onClearForm() {
        this.name = '';
        this.age = null;
    }
    
    onAddCharacter() {
        const charName = this.characterNameInputRef.nativeElement.value;
        const charAge = this.characterAgeInputRef.nativeElement.value;
        const newCharacter = new Character(charName, charAge);
        this.characterAdded.emit(newCharacter);

        this.name = '';
        this.age = null;
    }

}