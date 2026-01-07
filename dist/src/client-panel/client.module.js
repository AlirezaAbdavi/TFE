"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("../modules/users/users.module");
const tasks_module_1 = require("../modules/tasks/tasks.module");
const client_users_controller_1 = require("./controllers/client-users.controller");
const client_tasks_controller_1 = require("./controllers/client-tasks.controller");
let ClientModule = class ClientModule {
};
exports.ClientModule = ClientModule;
exports.ClientModule = ClientModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, tasks_module_1.TasksModule],
        controllers: [client_users_controller_1.ClientUsersController, client_tasks_controller_1.ClientTasksController],
    })
], ClientModule);
//# sourceMappingURL=client.module.js.map