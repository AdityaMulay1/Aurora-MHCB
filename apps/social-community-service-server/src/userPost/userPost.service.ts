import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserPostServiceBase } from "./base/userPost.service.base";

@Injectable()
export class UserPostService extends UserPostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
