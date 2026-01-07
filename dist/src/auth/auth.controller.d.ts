import { AuthService } from './auth.service';
import { logInDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UpdateUserPasswordDto } from 'src/modules/users/dto/update-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    logIn(loginInfo: logInDto): Promise<object>;
    register(registerInfo: RegisterDto): Promise<Omit<{
        name: string | null;
        id: string;
        email: string;
        password: string;
        role: import("@prisma/client").$Enums.Role;
        avatar: string;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, "password">>;
    updatePassword(email: string, updateUserPasswordDto: UpdateUserPasswordDto): Promise<{
        name: string | null;
        id: string;
        email: string;
        password: string;
        role: import("@prisma/client").$Enums.Role;
        avatar: string;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
