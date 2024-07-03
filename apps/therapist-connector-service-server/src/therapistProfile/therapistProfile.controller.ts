import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TherapistProfileService } from "./therapistProfile.service";
import { TherapistProfileControllerBase } from "./base/therapistProfile.controller.base";

@swagger.ApiTags("therapistProfiles")
@common.Controller("therapistProfiles")
export class TherapistProfileController extends TherapistProfileControllerBase {
  constructor(protected readonly service: TherapistProfileService) {
    super(service);
  }
}
