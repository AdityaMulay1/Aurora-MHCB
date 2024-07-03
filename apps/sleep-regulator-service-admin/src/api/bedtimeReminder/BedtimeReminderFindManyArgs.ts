import { BedtimeReminderWhereInput } from "./BedtimeReminderWhereInput";
import { BedtimeReminderOrderByInput } from "./BedtimeReminderOrderByInput";

export type BedtimeReminderFindManyArgs = {
  where?: BedtimeReminderWhereInput;
  orderBy?: Array<BedtimeReminderOrderByInput>;
  skip?: number;
  take?: number;
};
