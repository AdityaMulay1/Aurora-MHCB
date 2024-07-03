import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MeditationSubPageService } from "./meditationSubPage.service";
import { MeditationSubPageControllerBase } from "./base/meditationSubPage.controller.base";

@swagger.ApiTags("meditationSubPages")
@common.Controller("meditationSubPages")
export class MeditationSubPageController extends MeditationSubPageControllerBase {
  constructor(protected readonly service: MeditationSubPageService) {
    super(service);
  }
}
