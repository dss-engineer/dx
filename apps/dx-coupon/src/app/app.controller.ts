import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/coupon/program')
  getCouponProgram() {
    return this.appService.getCouponProgram();
  }

  @Get('/coupon/list')
  getCouponList() {
    return this.appService.getCouponList();
  }
}
