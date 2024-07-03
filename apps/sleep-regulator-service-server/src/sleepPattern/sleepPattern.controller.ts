import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SleepPatternService } from "./sleepPattern.service";
import { SleepPatternControllerBase } from "./base/sleepPattern.controller.base";

@swagger.ApiTags("sleepPatterns")
@common.Controller("sleepPatterns")
export class SleepPatternController extends SleepPatternControllerBase {
  constructor(protected readonly service: SleepPatternService) {
    super(service);
  }
}
