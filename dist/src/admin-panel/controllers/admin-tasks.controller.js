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
exports.AdminTasksController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const tasks_service_1 = require("../../modules/tasks/tasks.service");
const admin_create_task_dto_1 = require("../../modules/tasks/dto/admin-create-task.dto");
const update_task_dto_1 = require("../../modules/tasks/dto/update-task.dto");
const guards_1 = require("../../common/guards");
const decorators_1 = require("../../common/decorators");
let AdminTasksController = class AdminTasksController {
    tasksService;
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    getAllTasks() {
        return this.tasksService.findAll();
    }
    createTask(createTaskDto) {
        return this.tasksService.create(createTaskDto.userId, createTaskDto);
    }
    getTask(id) {
        return this.tasksService.findOne(id);
    }
    updateTask(id, updateTaskDto) {
        return this.tasksService.update(id, updateTaskDto);
    }
    deleteTask(id) {
        return this.tasksService.remove(id);
    }
};
exports.AdminTasksController = AdminTasksController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'دریافت لیست همه تسک‌ها' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminTasksController.prototype, "getAllTasks", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'ایجاد تسک برای یک کاربر' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_create_task_dto_1.AdminCreateTaskDto]),
    __metadata("design:returntype", void 0)
], AdminTasksController.prototype, "createTask", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'دریافت اطلاعات یک تسک' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminTasksController.prototype, "getTask", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'بروزرسانی تسک' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", void 0)
], AdminTasksController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'حذف تسک' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminTasksController.prototype, "deleteTask", null);
exports.AdminTasksController = AdminTasksController = __decorate([
    (0, swagger_1.ApiTags)('Admin - Tasks'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('admin/tasks'),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, decorators_1.Roles)(client_1.Role.ADMIN, client_1.Role.SUPER_ADMIN),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], AdminTasksController);
//# sourceMappingURL=admin-tasks.controller.js.map