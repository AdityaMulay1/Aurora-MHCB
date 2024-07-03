import { SortOrder } from "../../util/SortOrder";

export type SleepPatternOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  patternId?: SortOrder;
  sleepDate?: SortOrder;
  sleepDuration?: SortOrder;
  sleepEnd?: SortOrder;
  sleepQuality?: SortOrder;
  sleepStart?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  wakeUpCount?: SortOrder;
};
