import { OnInit } from '@angular/core';

export class CounterService {

    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    ngOnInit() {
        console.log('inactive counter = ' + this.activeToInactiveCounter);
        console.log('active counter = ' + this.inactiveToActiveCounter);
    }    

    incActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('inactive counter = ' + this.activeToInactiveCounter);
    }

    incInactiveToActive() {
        this.inactiveToActiveCounter++;
        console.log('active counter = ' + this.inactiveToActiveCounter);
    }
}