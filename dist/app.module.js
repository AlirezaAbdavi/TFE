"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _appcontroller = require("./app.controller");
const _appservices = require("./app.services");
const _usersmodule = require("./users/users.module");
const _mongoose = require("@nestjs/mongoose");
const _authmodule = require("./auth/auth.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _config.ConfigModule.forRoot({
                isGlobal: true
            }),
            _mongoose.MongooseModule.forRootAsync({
                imports: [
                    _config.ConfigModule
                ],
                useFactory: async (configService)=>({
                        uri: configService.get('MONGO_URI')
                    }),
                inject: [
                    _config.ConfigService
                ]
            }),
            _usersmodule.UsersModule,
            _authmodule.AuthModule
        ],
        controllers: [
            _appcontroller.AppController
        ],
        providers: [
            _appservices.AppServices
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map