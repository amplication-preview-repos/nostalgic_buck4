import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentGatewayModuleBase } from "./base/paymentGateway.module.base";
import { PaymentGatewayService } from "./paymentGateway.service";
import { PaymentGatewayController } from "./paymentGateway.controller";

@Module({
  imports: [PaymentGatewayModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentGatewayController],
  providers: [PaymentGatewayService],
  exports: [PaymentGatewayService],
})
export class PaymentGatewayModule {}
