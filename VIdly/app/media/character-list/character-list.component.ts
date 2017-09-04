import { Component, OnInit } from '@angular/core';
import { Character } from '../shared/character.model';
import { CharacterService } from '../shared/services/character.service';

@Component({
    selector: 'app-character-list',
    templateUrl: './app/media/character-list/character-list.component.html',
    providers: [CharacterService]
})
export class CharacterListComponent implements OnInit {
    //characters: Character[] = [
    //    new Character('Buzz Lightyear', 40),
    //    new Character('Woody', 25),
    //    new Character('Dr Rumack', 60)
    //];
    characters: Character[];

    constructor(private characterService: CharacterService) {
    }

    ngOnInit() {
        this.characters = this.characterService.getCharacters();
    }

    onCharacterAdded(character: Character) {
        this.characters.push(character);
    }
}