import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SleepPatternServiceBase } from "./base/sleepPattern.service.base";

@Injectable()
export class SleepPatternService extends SleepPatternServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
