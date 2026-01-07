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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientTasksController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tasks_service_1 = require("../../modules/tasks/tasks.service");
const create_task_dto_1 = require("../../modules/tasks/dto/create-task.dto");
const update_task_dto_1 = require("../../modules/tasks/dto/update-task.dto");
const guards_1 = require("../../common/guards");
const decorators_1 = require("../../common/decorators");
let ClientTasksController = class ClientTasksController {
    tasksService;
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    getMyTasks(userId) {
        return this.tasksService.findAllByUser(userId);
    }
    createTask(userId, createTaskDto) {
        return this.tasksService.create(userId, createTaskDto);
    }
    getTask(userId, id) {
        return this.tasksService.findOneByUser(id, userId);
    }
    updateTask(userId, id, updateTaskDto) {
        return this.tasksService.updateByUser(id, userId, updateTaskDto);
    }
    deleteTask(userId, id) {
        return this.tasksService.removeByUser(id, userId);
    }
};
exports.ClientTasksController = ClientTasksController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'دریافت تسک‌های کاربر' }),
    __param(0, (0, decorators_1.CurrentUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientTasksController.prototype, "getMyTasks", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'ایجاد تسک جدید' }),
    __param(0, (0, decorators_1.CurrentUser)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", void 0)
], ClientTasksController.prototype, "createTask", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'دریافت اطلاعات یک تسک' }),
    __param(0, (0, decorators_1.CurrentUser)('userId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ClientTasksController.prototype, "getTask", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'بروزرسانی تسک' }),
    __param(0, (0, decorators_1.CurrentUser)('userId')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", void 0)
], ClientTasksController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'حذف تسک' }),
    __param(0, (0, decorators_1.CurrentUser)('userId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ClientTasksController.prototype, "deleteTask", null);
exports.ClientTasksController = ClientTasksController = __decorate([
    (0, swagger_1.ApiTags)('Client - Tasks'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('client/tasks'),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], ClientTasksController);
//# sourceMappingURL=client-tasks.controller.js.map