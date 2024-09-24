export type BedtimeReminderUpdateInput = {
  daysOfWeek?: Array<"Option1">;
  isActive?: boolean | null;
  message?: string | null;
  reminderId?: string | null;
  reminderTime?: Date | null;
  userId?: string | null;
};
