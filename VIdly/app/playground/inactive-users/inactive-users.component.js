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
var users_service_1 = require("../users.service");
var InactiveUsersComponent = (function () {
    function InactiveUsersComponent(userService) {
        this.userService = userService;
        this.userSetToActive = new core_1.EventEmitter();
    }
    InactiveUsersComponent.prototype.onSetToActive = function (id) {
        this.userSetToActive.emit(id);
    };
    return InactiveUsersComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], InactiveUsersComponent.prototype, "users", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InactiveUsersComponent.prototype, "userSetToActive", void 0);
InactiveUsersComponent = __decorate([
    core_1.Component({
        selector: 'app-inactive-users',
        templateUrl: './app/playground/inactive-users/inactive-users.component.html'
    }),
    __metadata("design:paramtypes", [users_service_1.UserService])
], InactiveUsersComponent);
exports.InactiveUsersComponent = InactiveUsersComponent;
//# sourceMappingURL=inactive-users.component.js.map