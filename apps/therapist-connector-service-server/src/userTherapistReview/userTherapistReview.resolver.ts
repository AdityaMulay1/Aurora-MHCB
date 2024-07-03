import * as graphql from "@nestjs/graphql";
import { UserTherapistReviewResolverBase } from "./base/userTherapistReview.resolver.base";
import { UserTherapistReview } from "./base/UserTherapistReview";
import { UserTherapistReviewService } from "./userTherapistReview.service";

@graphql.Resolver(() => UserTherapistReview)
export class UserTherapistReviewResolver extends UserTherapistReviewResolverBase {
  constructor(protected readonly service: UserTherapistReviewService) {
    super(service);
  }
}
