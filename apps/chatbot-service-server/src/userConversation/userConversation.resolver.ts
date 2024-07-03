import * as graphql from "@nestjs/graphql";
import { UserConversationResolverBase } from "./base/userConversation.resolver.base";
import { UserConversation } from "./base/UserConversation";
import { UserConversationService } from "./userConversation.service";

@graphql.Resolver(() => UserConversation)
export class UserConversationResolver extends UserConversationResolverBase {
  constructor(protected readonly service: UserConversationService) {
    super(service);
  }
}
