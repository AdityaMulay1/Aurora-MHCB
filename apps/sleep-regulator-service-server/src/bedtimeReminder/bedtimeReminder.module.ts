import { Module } from "@nestjs/common";
import { BedtimeReminderModuleBase } from "./base/bedtimeReminder.module.base";
import { BedtimeReminderService } from "./bedtimeReminder.service";
import { BedtimeReminderController } from "./bedtimeReminder.controller";
import { BedtimeReminderResolver } from "./bedtimeReminder.resolver";

@Module({
  imports: [BedtimeReminderModuleBase],
  controllers: [BedtimeReminderController],
  providers: [BedtimeReminderService, BedtimeReminderResolver],
  exports: [BedtimeReminderService],
})
export class BedtimeReminderModule {}
