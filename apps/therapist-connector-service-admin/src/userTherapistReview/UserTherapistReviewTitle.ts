import { UserTherapistReview as TUserTherapistReview } from "../api/userTherapistReview/UserTherapistReview";

export const USERTHERAPISTREVIEW_TITLE_FIELD = "reviewId";

export const UserTherapistReviewTitle = (
  record: TUserTherapistReview
): string => {
  return record.reviewId?.toString() || String(record.id);
};
