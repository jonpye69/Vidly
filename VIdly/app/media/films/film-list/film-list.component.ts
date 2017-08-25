import { Component, OnInit } from '@angular/core';
import { Film } from '../../films/film.model';

@Component({
    selector: 'app-film-list',
    templateUrl: './app/media/films/film-list/film-list.component.html'
})
export class FilmListComponent implements OnInit {
    films: Film[] = [
        new Film('Toy Story 1', 'An animated story about toys for the family', 'https://vignette3.wikia.nocookie.net/disney/images/1/13/Toy_Story.jpg/revision/latest?cb=20151003163558'),
        new Film('Aeroplane', 'An adult comedy for the um, adults', 'https://upload.wikimedia.org/wikipedia/en/f/f5/Airplane%21.jpg')
    ];

    ngOnInit() {
        
    }

}