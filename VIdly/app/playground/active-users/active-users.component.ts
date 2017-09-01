import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-active-users',
    templateUrl: './app/playground/active-users/active-users.component.html'
})
export class ActiveUsersComponent implements OnInit {
    users: string[];
    userActiveCount: number;


    constructor(private userService: UserService) { }

    ngOnInit() {
        this.users = this.userService.activeUsers;
        this.userActiveCount = this.userService.activeUsers.length;
    }

    onSetToInactive(id: number) {
        this.userService.setToInactive(id);
        this.userActiveCount = this.userService.activeUsers.length;
    }

}