import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MeditationSessionService } from "./meditationSession.service";
import { MeditationSessionControllerBase } from "./base/meditationSession.controller.base";

@swagger.ApiTags("meditationSessions")
@common.Controller("meditationSessions")
export class MeditationSessionController extends MeditationSessionControllerBase {
  constructor(protected readonly service: MeditationSessionService) {
    super(service);
  }
}
