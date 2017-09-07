import { Component, OnInit } from '@angular/core';
import { Character } from '../shared/character.model';
import { CharacterListService } from '../shared/services/character-list.service';

@Component({
    selector: 'app-character-list',
    templateUrl: './app/media/character-list/character-list.component.html'
})
export class CharacterListComponent implements OnInit {
    characters: Character[];

    constructor(private characterListService: CharacterListService) {
    }

    ngOnInit() {
        this.characters = this.characterListService.getCharacters();
        // subscribe to the event emitter in the character list service
        this.characterListService.charactersChanged
            .subscribe(
                (characters: Character[]) => {
                    this.characters = characters;
                }
            );
    }

}