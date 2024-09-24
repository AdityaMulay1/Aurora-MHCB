import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MeditationSubPageWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  order?: IntNullableFilter;
  sessionType?: StringNullableFilter;
  subPageTitle?: StringNullableFilter;
};
