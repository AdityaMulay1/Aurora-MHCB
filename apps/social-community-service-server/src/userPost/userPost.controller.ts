import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserPostService } from "./userPost.service";
import { UserPostControllerBase } from "./base/userPost.controller.base";

@swagger.ApiTags("userPosts")
@common.Controller("userPosts")
export class UserPostController extends UserPostControllerBase {
  constructor(protected readonly service: UserPostService) {
    super(service);
  }
}
