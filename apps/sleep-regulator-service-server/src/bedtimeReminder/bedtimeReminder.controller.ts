import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BedtimeReminderService } from "./bedtimeReminder.service";
import { BedtimeReminderControllerBase } from "./base/bedtimeReminder.controller.base";

@swagger.ApiTags("bedtimeReminders")
@common.Controller("bedtimeReminders")
export class BedtimeReminderController extends BedtimeReminderControllerBase {
  constructor(protected readonly service: BedtimeReminderService) {
    super(service);
  }
}
