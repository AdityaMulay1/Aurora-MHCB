import { Module } from "@nestjs/common";
import { MeditationSubPageModuleBase } from "./base/meditationSubPage.module.base";
import { MeditationSubPageService } from "./meditationSubPage.service";
import { MeditationSubPageController } from "./meditationSubPage.controller";
import { MeditationSubPageResolver } from "./meditationSubPage.resolver";

@Module({
  imports: [MeditationSubPageModuleBase],
  controllers: [MeditationSubPageController],
  providers: [MeditationSubPageService, MeditationSubPageResolver],
  exports: [MeditationSubPageService],
})
export class MeditationSubPageModule {}
