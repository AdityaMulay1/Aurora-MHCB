import * as graphql from "@nestjs/graphql";
import { UserPostResolverBase } from "./base/userPost.resolver.base";
import { UserPost } from "./base/UserPost";
import { UserPostService } from "./userPost.service";

@graphql.Resolver(() => UserPost)
export class UserPostResolver extends UserPostResolverBase {
  constructor(protected readonly service: UserPostService) {
    super(service);
  }
}
