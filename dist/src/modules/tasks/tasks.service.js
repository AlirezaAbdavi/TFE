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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const crypto_1 = require("crypto");
let TasksService = class TasksService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, createTaskDto) {
        return this.prisma.task.create({
            data: {
                id: (0, crypto_1.randomUUID)(),
                description: createTaskDto.description,
                status: createTaskDto.status,
                userId,
            },
        });
    }
    async findAll() {
        return this.prisma.task.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        });
    }
    async findAllByUser(userId) {
        return this.prisma.task.findMany({
            where: { userId },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        const task = await this.prisma.task.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        });
        if (!task)
            throw new common_1.NotFoundException('تسک یافت نشد');
        return task;
    }
    async findOneByUser(id, userId) {
        const task = await this.prisma.task.findFirst({
            where: { id, userId },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        });
        if (!task)
            throw new common_1.NotFoundException('تسک یافت نشد');
        return task;
    }
    async update(id, updateTaskDto) {
        const task = await this.prisma.task.findUnique({ where: { id } });
        if (!task)
            throw new common_1.NotFoundException('تسک یافت نشد');
        return this.prisma.task.update({
            where: { id },
            data: updateTaskDto,
        });
    }
    async updateByUser(id, userId, updateTaskDto) {
        const task = await this.prisma.task.findFirst({ where: { id, userId } });
        if (!task)
            throw new common_1.NotFoundException('تسک یافت نشد');
        return this.prisma.task.update({
            where: { id },
            data: updateTaskDto,
        });
    }
    async remove(id) {
        const task = await this.prisma.task.findUnique({ where: { id } });
        if (!task)
            throw new common_1.NotFoundException('تسک یافت نشد');
        return this.prisma.task.delete({ where: { id } });
    }
    async removeByUser(id, userId) {
        const task = await this.prisma.task.findFirst({ where: { id, userId } });
        if (!task)
            throw new common_1.NotFoundException('تسک یافت نشد');
        return this.prisma.task.delete({ where: { id } });
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map