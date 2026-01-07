import { UsersService } from '../../modules/users/users.service';
import { UpdateUserDto } from 'src/modules/users/dto/update-user.dto';
export declare class ClientUsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(userId: string): Promise<{
        name: string | null;
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        avatar: string;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateProfile(userId: string, updateUserDto: UpdateUserDto): Promise<{
        name: string | null;
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        avatar: string;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
