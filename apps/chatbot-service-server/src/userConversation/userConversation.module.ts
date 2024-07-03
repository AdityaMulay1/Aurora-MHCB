import { Module } from "@nestjs/common";
import { UserConversationModuleBase } from "./base/userConversation.module.base";
import { UserConversationService } from "./userConversation.service";
import { UserConversationController } from "./userConversation.controller";
import { UserConversationResolver } from "./userConversation.resolver";

@Module({
  imports: [UserConversationModuleBase],
  controllers: [UserConversationController],
  providers: [UserConversationService, UserConversationResolver],
  exports: [UserConversationService],
})
export class UserConversationModule {}
