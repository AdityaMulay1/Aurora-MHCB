import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MeditationSubPageServiceBase } from "./base/meditationSubPage.service.base";

@Injectable()
export class MeditationSubPageService extends MeditationSubPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
