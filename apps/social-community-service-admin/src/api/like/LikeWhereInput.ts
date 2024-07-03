import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LikeWhereInput = {
  id?: StringFilter;
  likeId?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
  userPostId?: StringNullableFilter;
};
