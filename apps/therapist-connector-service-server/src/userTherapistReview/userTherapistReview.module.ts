import { Module } from "@nestjs/common";
import { UserTherapistReviewModuleBase } from "./base/userTherapistReview.module.base";
import { UserTherapistReviewService } from "./userTherapistReview.service";
import { UserTherapistReviewController } from "./userTherapistReview.controller";
import { UserTherapistReviewResolver } from "./userTherapistReview.resolver";

@Module({
  imports: [UserTherapistReviewModuleBase],
  controllers: [UserTherapistReviewController],
  providers: [UserTherapistReviewService, UserTherapistReviewResolver],
  exports: [UserTherapistReviewService],
})
export class UserTherapistReviewModule {}
