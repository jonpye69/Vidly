"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../user.service");
var InactiveUsersComponent = /** @class */ (function () {
    function InactiveUsersComponent(userService) {
        this.userService = userService;
    }
    InactiveUsersComponent.prototype.ngOnInit = function () {
        this.users = this.userService.inactiveUsers;
        this.userInactiveCount = this.userService.inactiveUsers.length;
    };
    InactiveUsersComponent.prototype.onSetToActive = function (id) {
        this.userService.setToActive(id);
        this.userInactiveCount = this.userService.inactiveUsers.length;
    };
    InactiveUsersComponent = __decorate([
        core_1.Component({
            selector: 'app-inactive-users',
            templateUrl: './app/playground/inactive-users/inactive-users.component.html'
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], InactiveUsersComponent);
    return InactiveUsersComponent;
}());
exports.InactiveUsersComponent = InactiveUsersComponent;
//# sourceMappingURL=inactive-users.component.js.map