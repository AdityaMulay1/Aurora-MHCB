import * as graphql from "@nestjs/graphql";
import { BedtimeReminderResolverBase } from "./base/bedtimeReminder.resolver.base";
import { BedtimeReminder } from "./base/BedtimeReminder";
import { BedtimeReminderService } from "./bedtimeReminder.service";

@graphql.Resolver(() => BedtimeReminder)
export class BedtimeReminderResolver extends BedtimeReminderResolverBase {
  constructor(protected readonly service: BedtimeReminderService) {
    super(service);
  }
}
