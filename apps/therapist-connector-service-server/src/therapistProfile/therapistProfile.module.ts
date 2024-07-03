import { Module } from "@nestjs/common";
import { TherapistProfileModuleBase } from "./base/therapistProfile.module.base";
import { TherapistProfileService } from "./therapistProfile.service";
import { TherapistProfileController } from "./therapistProfile.controller";
import { TherapistProfileResolver } from "./therapistProfile.resolver";

@Module({
  imports: [TherapistProfileModuleBase],
  controllers: [TherapistProfileController],
  providers: [TherapistProfileService, TherapistProfileResolver],
  exports: [TherapistProfileService],
})
export class TherapistProfileModule {}
