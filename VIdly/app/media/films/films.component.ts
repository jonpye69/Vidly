import { Component, Output } from '@angular/core';
import { Film } from './film.model';

@Component({
    selector: 'app-films',
    templateUrl: './app/media/films/films.component.html'
})
export class FilmsComponent {
     @Output() selectedFilm: Film;
}