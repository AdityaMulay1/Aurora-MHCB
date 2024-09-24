import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserTherapistReviewWhereInput = {
  id?: StringFilter;
  rating?: FloatNullableFilter;
  reviewId?: StringNullableFilter;
  reviewText?: StringNullableFilter;
  therapistId?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
