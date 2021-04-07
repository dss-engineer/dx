import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getCouponProgram(): { message: string } {
    return { message: 'Welcome to coupon program!' };
  }

  getCouponList(): { message: string } {
    return { message: 'Welcome to coupon list!' };
  }
}
