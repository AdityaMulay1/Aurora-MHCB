import { Module } from "@nestjs/common";
import { UserPostModuleBase } from "./base/userPost.module.base";
import { UserPostService } from "./userPost.service";
import { UserPostController } from "./userPost.controller";
import { UserPostResolver } from "./userPost.resolver";

@Module({
  imports: [UserPostModuleBase],
  controllers: [UserPostController],
  providers: [UserPostService, UserPostResolver],
  exports: [UserPostService],
})
export class UserPostModule {}
