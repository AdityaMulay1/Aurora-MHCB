import { SleepPattern as TSleepPattern } from "../api/sleepPattern/SleepPattern";

export const SLEEPPATTERN_TITLE_FIELD = "patternId";

export const SleepPatternTitle = (record: TSleepPattern): string => {
  return record.patternId?.toString() || String(record.id);
};
