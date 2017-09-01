"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserService = (function () {
    function UserService() {
        this.activeUsers = ['jon', 'jake'];
        this.inactiveUsers = ['oz', 'abi'];
    }
    UserService.prototype.setToActive = function (id) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    };
    UserService.prototype.setToInactive = function (id) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map