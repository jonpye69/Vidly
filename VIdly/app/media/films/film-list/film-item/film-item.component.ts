import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../film.model';
import { FilmService } from '../../../shared/services/film.service';

@Component({
    selector: 'app-film-item',
    templateUrl: './app/media/films/film-list/film-item/film-item.component.html'
})
export class FilmItemComponent implements OnInit {
    @Input() film: Film;
    @Input() filmNumber: number;
    @Input() filmLength: number;
    //private className: string = 'list-group-item clearfix';
    private filmListItemClasses: string; 

    constructor(private filmService: FilmService) {
    }

    onSelected() {
        this.filmService.filmSelected.emit(this.film);
    }

    // If first or last film, add border radius appropriately so we dont end up with rounded borders on every element, only the first and last
    //getClasses() {
    //    return this.filmNumber === 0 ?
    //        this.className + ' border-radius-top-4' :
    //        (this.filmLength === this.filmNumber + 1 ? this.className + ' border-radius-bottom-4 no-top-border' : this.className + ' no-radius no-top-border');
    //}

    // This way - just to illustrate another way other than calling a function - here we set a property instead.
    ngOnInit() {
        let initClassName: string = 'list-group-item clearfix';

        this.filmListItemClasses = this.filmNumber === 0 ?
            initClassName + ' border-radius-top-4' :
            (this.filmLength === this.filmNumber + 1 ? initClassName + ' border-radius-bottom-4 no-top-border' : initClassName + ' no-radius no-top-border');
    }


}