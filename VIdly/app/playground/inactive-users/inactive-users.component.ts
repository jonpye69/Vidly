import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-inactive-users',
    templateUrl: './app/playground/inactive-users/inactive-users.component.html'
})
export class InactiveUsersComponent implements OnInit {
    users: string[];
    userInactiveCount: number;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.users = this.userService.inactiveUsers;
        this.userInactiveCount = this.userService.inactiveUsers.length;
    }

    onSetToActive(id: number) {
        this.userService.setToActive(id);
        this.userInactiveCount = this.userService.inactiveUsers.length;
    }
}