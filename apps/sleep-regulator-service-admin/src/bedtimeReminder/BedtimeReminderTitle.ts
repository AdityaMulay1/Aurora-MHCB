import { BedtimeReminder as TBedtimeReminder } from "../api/bedtimeReminder/BedtimeReminder";

export const BEDTIMEREMINDER_TITLE_FIELD = "message";

export const BedtimeReminderTitle = (record: TBedtimeReminder): string => {
  return record.message?.toString() || String(record.id);
};
