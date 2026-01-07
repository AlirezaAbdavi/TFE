import { PrismaService } from '../../prisma/prisma.service';
import { User } from '@prisma/client';
import { Role } from '@prisma/client';
type UserWithoutPass = Omit<User, 'password'>;
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<UserWithoutPass[]>;
    create(email: string, password: string, name?: string, role?: Role): Promise<UserWithoutPass>;
    findById(id: string): Promise<UserWithoutPass>;
    deleteById(id: string): Promise<{
        message: string;
    }>;
    updateById(id: string, data: object): Promise<UserWithoutPass | null>;
    findOneByEmail(email: string): Promise<UserWithoutPass | null>;
    findOneByEmailWithPass(email: string): Promise<User | null>;
}
export {};
