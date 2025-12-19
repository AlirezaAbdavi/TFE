"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatus = exports.Role = void 0;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
    Role["SUPER_ADMIN"] = "SUPER_ADMIN";
})(Role || (exports.Role = Role = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["DONE"] = "DONE";
    TaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TaskStatus["PENDING"] = "PENDING";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
//# sourceMappingURL=constants.js.map