import { Module } from "@nestjs/common";
import { MeditationSessionModuleBase } from "./base/meditationSession.module.base";
import { MeditationSessionService } from "./meditationSession.service";
import { MeditationSessionController } from "./meditationSession.controller";
import { MeditationSessionResolver } from "./meditationSession.resolver";

@Module({
  imports: [MeditationSessionModuleBase],
  controllers: [MeditationSessionController],
  providers: [MeditationSessionService, MeditationSessionResolver],
  exports: [MeditationSessionService],
})
export class MeditationSessionModule {}
