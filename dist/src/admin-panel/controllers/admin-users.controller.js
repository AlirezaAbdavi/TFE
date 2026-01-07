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
exports.AdminUsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const users_service_1 = require("../../modules/users/users.service");
const create_user_dto_1 = require("../../modules/users/dto/create-user.dto");
const update_user_dto_1 = require("../../modules/users/dto/update-user.dto");
const guards_1 = require("../../common/guards");
const decorators_1 = require("../../common/decorators");
let AdminUsersController = class AdminUsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAllUsers() {
        return this.usersService.findAll();
    }
    createUser(createUserDto) {
        return this.usersService.create(createUserDto.email, createUserDto.password, createUserDto.name, createUserDto.role);
    }
    getUser(id) {
        return this.usersService.findById(id);
    }
    updateUser(id, updateUserDto) {
        return this.usersService.updateById(id, updateUserDto);
    }
    deleteUser(id) {
        return this.usersService.deleteById(id);
    }
};
exports.AdminUsersController = AdminUsersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'دریافت لیست همه کاربران' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminUsersController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'ایجاد کاربر جدید' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AdminUsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'دریافت اطلاعات یک کاربر' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminUsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'بروزرسانی اطلاعات کاربر' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], AdminUsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'حذف کاربر (soft delete)' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminUsersController.prototype, "deleteUser", null);
exports.AdminUsersController = AdminUsersController = __decorate([
    (0, swagger_1.ApiTags)('Admin - Users'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('admin/users'),
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, decorators_1.Roles)(client_1.Role.ADMIN, client_1.Role.SUPER_ADMIN),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AdminUsersController);
//# sourceMappingURL=admin-users.controller.js.map