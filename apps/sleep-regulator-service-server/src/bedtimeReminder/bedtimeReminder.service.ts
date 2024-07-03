import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BedtimeReminderServiceBase } from "./base/bedtimeReminder.service.base";

@Injectable()
export class BedtimeReminderService extends BedtimeReminderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
