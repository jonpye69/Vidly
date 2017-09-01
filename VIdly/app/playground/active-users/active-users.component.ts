import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../users.service';

@Component({
    selector: 'app-active-users',
    templateUrl: './app/playground/active-users/active-users.component.html'
})
export class ActiveUsersComponent {
    @Input() users: string[];
    @Output() userSetToInactive = new EventEmitter<number>();

    constructor(private userService: UserService) { }

    onSetToInactive(id: number) {
        this.userSetToInactive.emit(id);
    }

}