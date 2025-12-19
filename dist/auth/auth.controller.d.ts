import { AuthService } from './auth.service';
import { logInDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    logIn(loginInfo: logInDto): Promise<{
        access_token: string;
    }>;
}
