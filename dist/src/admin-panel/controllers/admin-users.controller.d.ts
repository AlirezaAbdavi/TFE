import { UsersService } from '../../modules/users/users.service';
import { CreateUserDto } from '../../modules/users/dto/create-user.dto';
import { UpdateUserDto } from '../../modules/users/dto/update-user.dto';
export declare class AdminUsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<{
        name: string | null;
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        avatar: string;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createUser(createUserDto: CreateUserDto): Promise<{
        name: string | null;
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        avatar: string;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getUser(id: string): Promise<{
        name: string | null;
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        avatar: string;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<{
        name: string | null;
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        avatar: string;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
}
