import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Film } from '../../film.model';

@Component({
    selector: 'app-film-item',
    templateUrl: './app/media/films/film-list/film-item/film-item.component.html'
})
export class FilmItemComponent {
    @Input() film: Film;
    @Output() filmSelected = new EventEmitter<void>();

    onSelected() {
        this.filmSelected.emit();
    }
}