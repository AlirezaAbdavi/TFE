import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Omit<Partial<CreateUserDto>, "password" | "role">>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
declare const UpdateUserRoleDto_base: import("@nestjs/common").Type<Pick<CreateUserDto, "role">>;
export declare class UpdateUserRoleDto extends UpdateUserRoleDto_base {
}
export declare class UpdateUserPasswordDto {
    currentPassword: string;
    newPassword: string;
}
export {};
