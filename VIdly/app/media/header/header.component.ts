import { Component, EventEmitter, Output } from '@angular/core';
import { Utilities } from '../shared/utilities.static';

@Component({
    selector: 'app-header',
    templateUrl: './app/media/header/header.component.html'
})
export class HeaderComponent {
    @Output() optSelected = new EventEmitter<string>();
    selectedOpt: string = Utilities.defaultMenuLocation;

    onSelect(opt: string) {
        this.selectedOpt = opt;  // allows us to set the active class against the menu item
        this.optSelected.emit(opt);
    }
}