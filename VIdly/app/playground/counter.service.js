"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CounterService = /** @class */ (function () {
    function CounterService() {
        this.activeToInactiveCounter = 0;
        this.inactiveToActiveCounter = 0;
    }
    CounterService.prototype.ngOnInit = function () {
        console.log('inactive counter = ' + this.activeToInactiveCounter);
        console.log('active counter = ' + this.inactiveToActiveCounter);
    };
    CounterService.prototype.incActiveToInactive = function () {
        this.activeToInactiveCounter++;
        console.log('inactive counter = ' + this.activeToInactiveCounter);
    };
    CounterService.prototype.incInactiveToActive = function () {
        this.inactiveToActiveCounter++;
        console.log('active counter = ' + this.inactiveToActiveCounter);
    };
    return CounterService;
}());
exports.CounterService = CounterService;
//# sourceMappingURL=counter.service.js.map