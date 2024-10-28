/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { PaymentGatewayService } from "../paymentGateway.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PaymentGatewayCreateInput } from "./PaymentGatewayCreateInput";
import { PaymentGateway } from "./PaymentGateway";
import { PaymentGatewayFindManyArgs } from "./PaymentGatewayFindManyArgs";
import { PaymentGatewayWhereUniqueInput } from "./PaymentGatewayWhereUniqueInput";
import { PaymentGatewayUpdateInput } from "./PaymentGatewayUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PaymentGatewayControllerBase {
  constructor(
    protected readonly service: PaymentGatewayService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentGateway })
  @nestAccessControl.UseRoles({
    resource: "PaymentGateway",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPaymentGateway(
    @common.Body() data: PaymentGatewayCreateInput
  ): Promise<PaymentGateway> {
    return await this.service.createPaymentGateway({
      data: data,
      select: {
        bankSlipPrice: true,
        createdAt: true,
        id: true,
        logo: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentGateway] })
  @ApiNestedQuery(PaymentGatewayFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PaymentGateway",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async paymentGateways(
    @common.Req() request: Request
  ): Promise<PaymentGateway[]> {
    const args = plainToClass(PaymentGatewayFindManyArgs, request.query);
    return this.service.paymentGateways({
      ...args,
      select: {
        bankSlipPrice: true,
        createdAt: true,
        id: true,
        logo: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentGateway })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentGateway",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async paymentGateway(
    @common.Param() params: PaymentGatewayWhereUniqueInput
  ): Promise<PaymentGateway | null> {
    const result = await this.service.paymentGateway({
      where: params,
      select: {
        bankSlipPrice: true,
        createdAt: true,
        id: true,
        logo: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PaymentGateway })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentGateway",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePaymentGateway(
    @common.Param() params: PaymentGatewayWhereUniqueInput,
    @common.Body() data: PaymentGatewayUpdateInput
  ): Promise<PaymentGateway | null> {
    try {
      return await this.service.updatePaymentGateway({
        where: params,
        data: data,
        select: {
          bankSlipPrice: true,
          createdAt: true,
          id: true,
          logo: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PaymentGateway })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentGateway",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePaymentGateway(
    @common.Param() params: PaymentGatewayWhereUniqueInput
  ): Promise<PaymentGateway | null> {
    try {
      return await this.service.deletePaymentGateway({
        where: params,
        select: {
          bankSlipPrice: true,
          createdAt: true,
          id: true,
          logo: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Put(":id/logo")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: PaymentGateway,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadLogo(
    @common.Param()
    params: PaymentGatewayWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<PaymentGateway> {
    return this.service.uploadLogo(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/logo")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadLogo(
    @common.Param()
    params: PaymentGatewayWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadLogo({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/logo")
  @swagger.ApiOkResponse({
    type: PaymentGateway,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deleteLogo(
    @common.Param()
    params: PaymentGatewayWhereUniqueInput
  ): Promise<PaymentGateway> {
    return this.service.deleteLogo({
      where: params,
    });
  }
}
