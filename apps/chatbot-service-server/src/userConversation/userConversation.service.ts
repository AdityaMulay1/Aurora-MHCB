import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserConversationServiceBase } from "./base/userConversation.service.base";

@Injectable()
export class UserConversationService extends UserConversationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
