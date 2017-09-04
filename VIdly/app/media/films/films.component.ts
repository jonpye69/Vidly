import { Component, OnInit } from '@angular/core';

import { Film } from './film.model';
import { FilmService } from '../shared/services/film.service';

@Component({
    selector: 'app-films',
    templateUrl: './app/media/films/films.component.html',
     providers: [FilmService]
})
export class FilmsComponent implements OnInit {
    //@Output()
    selectedFilm: Film;

    constructor(private filmService: FilmService) { 
    }

    ngOnInit() {
        this.filmService.filmSelected
            .subscribe(
            (film: Film) => {
                this.selectedFilm = film;
            }
        );
    }

}