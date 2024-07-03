import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MeditationSessionServiceBase } from "./base/meditationSession.service.base";

@Injectable()
export class MeditationSessionService extends MeditationSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
