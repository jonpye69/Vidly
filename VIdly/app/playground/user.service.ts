import { Injectable, Output } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {
    activeUsers = ['jon', 'james', 'jonas'];
    inactiveUsers = ['jason', 'jake', 'jane'];

    constructor(private counterService: CounterService) {}

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.incInactiveToActive();
    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.incActiveToInactive();
    }
}