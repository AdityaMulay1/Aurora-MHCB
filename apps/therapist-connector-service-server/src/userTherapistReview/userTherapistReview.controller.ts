import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserTherapistReviewService } from "./userTherapistReview.service";
import { UserTherapistReviewControllerBase } from "./base/userTherapistReview.controller.base";

@swagger.ApiTags("userTherapistReviews")
@common.Controller("userTherapistReviews")
export class UserTherapistReviewController extends UserTherapistReviewControllerBase {
  constructor(protected readonly service: UserTherapistReviewService) {
    super(service);
  }
}
