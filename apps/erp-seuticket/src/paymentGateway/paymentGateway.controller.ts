import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentGatewayService } from "./paymentGateway.service";
import { PaymentGatewayControllerBase } from "./base/paymentGateway.controller.base";

@swagger.ApiTags("paymentGateways")
@common.Controller("paymentGateways")
export class PaymentGatewayController extends PaymentGatewayControllerBase {
  constructor(
    protected readonly service: PaymentGatewayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
