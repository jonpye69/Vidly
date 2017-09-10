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
    private filmSelectedNumber: number;

    constructor(private filmService: FilmService) {
    }
    
    onSelected(fn: number) {
        this.filmSelectedNumber = fn;
        this.filmService.filmSelected.emit(this.film);
    }

// If first or last film, add border radius appropriately so we dont end up with rounded borders on every element, only the first and last
//getClasses() {
//    return this.filmNumber === 0 ?
//        this.className + ' border-radius-top-4' + (this.filmSelectedNo === this.filmNumber ? ' active' : '') :
//        (this.filmLength === this.filmNumber + 1 ? this.className + ' border-radius-bottom-4 no-top-border' + (this.filmSelectedNo === this.filmNumber ? ' active' : '') : this.className + ' no-radius no-top-border' + (this.filmSelectedNo === this.filmNumber ? ' active' : ''));
//}




/* This way - just to illustrate another way other than calling a function - here we set 
 a property instead, that is in turn refererenced via property binding (ngClass). */
    ngOnInit() {
        let initClassName: string = 'list-group-item clearfix';

        this.filmListItemClasses = this.filmNumber === 0 ?
            initClassName + ' border-radius-top-4' :
            // plus one as we have a zero starting index on filmNumber
            (this.filmLength === this.filmNumber + 1 ? initClassName + ' border-radius-bottom-4 no-top-border' : initClassName + ' no-radius no-top-border');

        console.log('oninit this.filmListItemClasses = ' + this.filmListItemClasses);
    }

}