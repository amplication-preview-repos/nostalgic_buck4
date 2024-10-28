import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SignProviderModuleBase } from "./base/signProvider.module.base";
import { SignProviderService } from "./signProvider.service";
import { SignProviderController } from "./signProvider.controller";

@Module({
  imports: [SignProviderModuleBase, forwardRef(() => AuthModule)],
  controllers: [SignProviderController],
  providers: [SignProviderService],
  exports: [SignProviderService],
})
export class SignProviderModule {}
