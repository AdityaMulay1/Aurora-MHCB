import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserPostWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  likesCount?: IntNullableFilter;
  postId?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
