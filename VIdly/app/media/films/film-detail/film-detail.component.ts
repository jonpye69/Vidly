﻿import { Component, Input } from '@angular/core';
import { Film } from '../film.model';
import { FilmService } from '../../shared/services/film.service';
import { Character } from '../../shared/character.model';

@Component({
    selector: 'app-film-detail',
    templateUrl: './app/media/films/film-detail/film-detail.component.html'
})
export class FilmDetailComponent {
    @Input() film: Film;

    constructor(private filmService: FilmService) {
    }

    onAddToCharacterList() {
        this.filmService.addCharsToCharList(this.film.characters);
    }
}