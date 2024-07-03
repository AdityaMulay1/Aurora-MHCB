import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserProfileService } from "./userProfile.service";
import { UserProfileControllerBase } from "./base/userProfile.controller.base";

@swagger.ApiTags("userProfiles")
@common.Controller("userProfiles")
export class UserProfileController extends UserProfileControllerBase {
  constructor(protected readonly service: UserProfileService) {
    super(service);
  }
}
