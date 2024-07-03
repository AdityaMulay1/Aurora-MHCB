import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UserProfileWhereInput = {
  bio?: StringNullableFilter;
  id?: StringFilter;
  joinDate?: DateTimeNullableFilter;
  profilePicture?: StringNullableFilter;
  userId?: StringNullableFilter;
  username?: StringNullableFilter;
};
