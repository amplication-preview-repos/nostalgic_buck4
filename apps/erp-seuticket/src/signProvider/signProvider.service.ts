import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SignProviderServiceBase } from "./base/signProvider.service.base";

@Injectable()
export class SignProviderService extends SignProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
