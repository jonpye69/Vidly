import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../users.service';

@Component({
    selector: 'app-inactive-users',
    templateUrl: './app/playground/inactive-users/inactive-users.component.html'
})
export class InactiveUsersComponent {
    @Input() users: string[];
    @Output() userSetToActive = new EventEmitter<number>();

    constructor(private userService: UserService) {}

    onSetToActive(id: number) {
        this.userSetToActive.emit(id);
    }
}