import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BedtimeReminderWhereInput = {
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  message?: StringNullableFilter;
  reminderId?: StringNullableFilter;
  reminderTime?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
