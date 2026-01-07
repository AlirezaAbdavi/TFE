import { UsersService } from '../modules/users/users.service';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(email: string, pass: string): Promise<{
        name: string | null;
        id: string;
        email: string;
        password: string;
        role: import("@prisma/client").$Enums.Role;
        avatar: string;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    validateUser(email: string, password: string): Promise<{
        name: string | null;
        id: string;
        email: string;
        password: string;
        role: import("@prisma/client").$Enums.Role;
        avatar: string;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(user: Omit<User, 'password'>): object;
    register(registerDto: RegisterDto): Promise<Omit<User, 'password'>>;
    updatePassword(email: string, curPassword: string, newPassword: string): Promise<User | null>;
}
