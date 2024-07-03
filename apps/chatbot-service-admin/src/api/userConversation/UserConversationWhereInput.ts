import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserConversationWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
