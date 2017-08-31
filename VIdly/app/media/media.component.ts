import { Component, Output } from '@angular/core';
import { Utilities } from './shared/utilities.static';

@Component({
    selector: 'my-app',
    templateUrl: './app/media/media.component.html'
})
export class MediaComponent {
    @Output() loadedOpt: string = Utilities.defaultMenuLocation;

    onNavigate(opt: string) {
        this.loadedOpt = opt;
    }
}