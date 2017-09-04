import { Character } from '../character.model';

export class CharacterService {
    private characters: Character[] = [
        new Character('Buzz Lightyear', 40),
        new Character('Woody', 25),
        new Character('Dr Rumack', 60)
    ];

    getCharacters() {
        return this.characters.slice();
    }
}