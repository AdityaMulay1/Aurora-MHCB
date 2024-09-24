import { Module } from "@nestjs/common";
import { SleepPatternModuleBase } from "./base/sleepPattern.module.base";
import { SleepPatternService } from "./sleepPattern.service";
import { SleepPatternController } from "./sleepPattern.controller";
import { SleepPatternResolver } from "./sleepPattern.resolver";

@Module({
  imports: [SleepPatternModuleBase],
  controllers: [SleepPatternController],
  providers: [SleepPatternService, SleepPatternResolver],
  exports: [SleepPatternService],
})
export class SleepPatternModule {}
