import { EventEmitter } from '@angular/core';
import { Film } from '../../films/film.model';


export class FilmService {
    filmSelected = new EventEmitter<Film>();

    private films: Film[] = [
        new Film('Toy Story 1', 'An animated story about toys that come to life', 'https://vignette3.wikia.nocookie.net/disney/images/1/13/Toy_Story.jpg/revision/latest?cb=20151003163558'),
        new Film('Aeroplane', 'An adult comedy with most of the film based on an aircraft', 'https://images-na.ssl-images-amazon.com/images/I/51HV97CDVQL.jpg'),
        new Film('Mad Max', 'A futuristic film with a bloke called max', 'https://resizing.flixster.com/fTAEk1f2vY3Ab-m_StjV5bpZejU=/206x305/v1.bTsxMTE5MTI3NjtqOzE3NDk5OzEyMDA7NTA5Ozc1NQ'),
        new Film('The Shining', 'A horror that is pretty scary', 'http://static.rogerebert.com/uploads/movie/movie_poster/the-shining-1980/large_zc5y5OwKSV9MDXpfWxwrOjyRHsq.jpg')
    ];

    getFilms() {
        return this.films.slice();
    }

}