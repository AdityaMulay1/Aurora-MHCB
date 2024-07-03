import { Module } from "@nestjs/common";
import { UserProfileModuleBase } from "./base/userProfile.module.base";
import { UserProfileService } from "./userProfile.service";
import { UserProfileController } from "./userProfile.controller";
import { UserProfileResolver } from "./userProfile.resolver";

@Module({
  imports: [UserProfileModuleBase],
  controllers: [UserProfileController],
  providers: [UserProfileService, UserProfileResolver],
  exports: [UserProfileService],
})
export class UserProfileModule {}
