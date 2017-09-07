import { EventEmitter } from '@angular/core';
import { Character } from '../character.model';

export class CharacterListService {

    charactersChanged = new EventEmitter<Character[]>();

    private characters: Character[] = [
        new Character('Private Ryan', 39),
        new Character('Sally Anne', 39)
    ];

    getCharacters() {
        return this.characters.slice();
    }

    addCharacter(character: Character) {
        this.characters.push(character);
        this.charactersChanged.emit(this.characters.slice());
    }

    addCharacters(characters: Character[]) {
        this.characters.push(...characters);
        this.charactersChanged.emit(this.characters.slice());
    }

}