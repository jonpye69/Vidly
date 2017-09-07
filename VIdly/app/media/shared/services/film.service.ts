import { EventEmitter, Injectable } from '@angular/core';
import { Film } from '../../films/film.model';
import { Character } from '../character.model';
import { CharacterListService } from './character-list.service';

@Injectable()
export class FilmService {
    filmSelected = new EventEmitter<Film>();

    private films: Film[] = [
        new Film('Toy Story 1', 'An animated story about toys that come to life', 'https://vignette3.wikia.nocookie.net/disney/images/1/13/Toy_Story.jpg/revision/latest?cb=20151003163558',
            [new Character('Buzz Lightyear', 40), new Character('Woody', 25)]),
        new Film('Aeroplane', 'An adult comedy with most of the film based on an aircraft', 'https://images-na.ssl-images-amazon.com/images/I/51HV97CDVQL.jpg',
            [new Character('Dr Rumack', 60)]),
        new Film('Mad Max', 'A futuristic film with a bloke called max', 'https://resizing.flixster.com/fTAEk1f2vY3Ab-m_StjV5bpZejU=/206x305/v1.bTsxMTE5MTI3NjtqOzE3NDk5OzEyMDA7NTA5Ozc1NQ',
            [new Character('Mad Max', 39), new Character('Mental Mandy', 25)]),
        new Film('The Shining', 'A horror that is pretty scary', 'http://static.rogerebert.com/uploads/movie/movie_poster/the-shining-1980/large_zc5y5OwKSV9MDXpfWxwrOjyRHsq.jpg',
            [new Character('Mr Shining', 52)]),
        new Film('Saving Private Ryan', 'A war film with Tom Hanks', 'https://vignette.wikia.nocookie.net/savingprivateryan/images/a/a5/Saving_Private_Ryan_by_Narusargent.jpg/revision/latest?cb=20140111171311',
            [new Character('Captain Hanks', 38)])
    ];

    constructor(private characterListService: CharacterListService) {
    }

    getFilms() {
        return this.films.slice();
    }

    addCharsToCharList(characters: Character[]) {
        this.characterListService.addCharacters(characters);
    }
}