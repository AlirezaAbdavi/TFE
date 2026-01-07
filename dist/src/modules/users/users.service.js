"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return await this.prisma.user.findMany({
            where: { deletedAt: null },
            omit: { password: true },
        });
    }
    async create(email, password, name, role) {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        return this.prisma.user.create({
            data: { email, password: hashPassword, name, role },
            omit: { password: true },
        });
    }
    async findById(id) {
        const user = await this.prisma.user.findFirst({
            where: { id, deletedAt: null },
            omit: { password: true },
        });
        if (!user)
            throw new common_1.NotFoundException('کاربر یافت نشد');
        return user;
    }
    async deleteById(id) {
        const user = await this.prisma.user.findFirst({
            where: { id, deletedAt: null },
        });
        if (!user)
            throw new common_1.NotFoundException('کاربر یافت نشد');
        const deletedUser = await this.prisma.user.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
        if (!deletedUser)
            throw new common_1.NotFoundException('کاربر حذف نشد مجدد تلاش کنید');
        return { message: 'حساب کاربری شما با موفقیت حذف شد' };
    }
    async updateById(id, data) {
        const user = await this.prisma.user.update({
            where: { id, deletedAt: null },
            data,
            omit: { password: true },
        });
        if (!user)
            throw new common_1.NotFoundException('کاربر یافت نشد');
        return user;
    }
    async findOneByEmail(email) {
        return await this.prisma.user.findFirst({
            where: { email, deletedAt: null },
            omit: { password: true },
        });
    }
    async findOneByEmailWithPass(email) {
        return await this.prisma.user.findFirst({
            where: { email, deletedAt: null },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map