import { Component } from '@angular/core';
import { Character } from '../shared/character.model';

@Component({
    selector: 'app-character-list',
    templateUrl: './app/media/character-list/character-list.component.html'
})
export class CharacterListComponent {
    characters: Character[] = [
        new Character('Buzz Lightyear', 40),
        new Character('Woody', 25),
        new Character('Dr Rumack', 60)
    ];

    onCharacterAdded(character: Character) {
        this.characters.push(character);
    }
}