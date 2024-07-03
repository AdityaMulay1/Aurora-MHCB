import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TherapistProfileWhereInput = {
  availability?: StringNullableFilter;
  bio?: StringNullableFilter;
  contactInfo?: StringNullableFilter;
  experienceYears?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  profilePictureUrl?: StringNullableFilter;
  qualifications?: StringNullableFilter;
  rating?: FloatNullableFilter;
  specialization?: StringNullableFilter;
  therapistId?: StringNullableFilter;
};
