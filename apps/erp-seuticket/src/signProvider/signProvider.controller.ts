import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SignProviderService } from "./signProvider.service";
import { SignProviderControllerBase } from "./base/signProvider.controller.base";

@swagger.ApiTags("signProviders")
@common.Controller("signProviders")
export class SignProviderController extends SignProviderControllerBase {
  constructor(
    protected readonly service: SignProviderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
