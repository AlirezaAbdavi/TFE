import { Controller, Get } from '@nestjs/common';

@Controller({ host: 'admin.localhost' })
export class AdminController {
  @Get()
  sayHello() {
    return 'Hello World From Admin Panel!';
  }
}
