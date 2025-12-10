"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    app.useGlobalPipes(new _common.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true
    }));
    const config = new _swagger.DocumentBuilder().setTitle('NestJS Course API') // عنوان مستندات
    .setDescription('مستندات API مدیریت کاربران') // توضیحات
    .setVersion('1.0').addBearerAuth() // ✅ اضافه کردن دکمه لاگین (قفل) برای توکن JWT
    .build();
    const document = _swagger.SwaggerModule.createDocument(app, config);
    _swagger.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

//# sourceMappingURL=main.js.map