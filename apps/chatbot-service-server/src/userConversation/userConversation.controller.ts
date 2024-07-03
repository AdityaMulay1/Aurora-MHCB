import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserConversationService } from "./userConversation.service";
import { UserConversationControllerBase } from "./base/userConversation.controller.base";

@swagger.ApiTags("userConversations")
@common.Controller("userConversations")
export class UserConversationController extends UserConversationControllerBase {
  constructor(protected readonly service: UserConversationService) {
    super(service);
  }
}
