import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SleepPatternWhereInput = {
  id?: StringFilter;
  notes?: StringNullableFilter;
  patternId?: StringNullableFilter;
  sleepDate?: DateTimeNullableFilter;
  sleepDuration?: IntNullableFilter;
  sleepEnd?: DateTimeNullableFilter;
  sleepQuality?: StringNullableFilter;
  sleepStart?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
  wakeUpCount?: IntNullableFilter;
};
