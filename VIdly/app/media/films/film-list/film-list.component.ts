﻿import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Film } from '../../films/film.model';

@Component({
    selector: 'app-film-list',
    templateUrl: './app/media/films/film-list/film-list.component.html'
})
export class FilmListComponent {
    films: Film[] = [
        new Film('Toy Story 1', 'An animated story about toys that come to life', 'https://vignette3.wikia.nocookie.net/disney/images/1/13/Toy_Story.jpg/revision/latest?cb=20151003163558'),
        new Film('Aeroplane', 'An adult comedy with most of the film based on an aircraft', 'https://images-na.ssl-images-amazon.com/images/I/51HV97CDVQL.jpg')
    ];
    @Output() filmWasSelected = new EventEmitter<Film>();

    onFilmSelected(filmEl: Film) {
        this.filmWasSelected.emit(filmEl);
    }

}