import { Component, Input } from '@angular/core';
import { Film } from '../film.model';

@Component({
    selector: 'app-film-detail',
    templateUrl: './app/media/films/film-detail/film-detail.component.html'
})
export class FilmDetailComponent {
    @Input() film: Film;


}