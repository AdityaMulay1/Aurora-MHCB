import { SortOrder } from "../../util/SortOrder";

export type BedtimeReminderOrderByInput = {
  createdAt?: SortOrder;
  daysOfWeek?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  message?: SortOrder;
  reminderId?: SortOrder;
  reminderTime?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
