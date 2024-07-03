import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CommentWhereInput = {
  commentId?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
  userPostId?: StringNullableFilter;
};
