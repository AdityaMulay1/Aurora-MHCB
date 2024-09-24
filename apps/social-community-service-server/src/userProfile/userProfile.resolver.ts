import * as graphql from "@nestjs/graphql";
import { UserProfileResolverBase } from "./base/userProfile.resolver.base";
import { UserProfile } from "./base/UserProfile";
import { UserProfileService } from "./userProfile.service";

@graphql.Resolver(() => UserProfile)
export class UserProfileResolver extends UserProfileResolverBase {
  constructor(protected readonly service: UserProfileService) {
    super(service);
  }
}
