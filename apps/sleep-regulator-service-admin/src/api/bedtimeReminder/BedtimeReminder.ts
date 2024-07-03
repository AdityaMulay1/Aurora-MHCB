export type BedtimeReminder = {
  createdAt: Date;
  daysOfWeek?: Array<"Option1">;
  id: string;
  isActive: boolean | null;
  message: string | null;
  reminderId: string | null;
  reminderTime: Date | null;
  updatedAt: Date;
  userId: string | null;
};
