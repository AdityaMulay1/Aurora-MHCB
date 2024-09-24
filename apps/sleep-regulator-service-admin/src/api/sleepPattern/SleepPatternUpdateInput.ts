export type SleepPatternUpdateInput = {
  notes?: string | null;
  patternId?: string | null;
  sleepDate?: Date | null;
  sleepDuration?: number | null;
  sleepEnd?: Date | null;
  sleepQuality?: string | null;
  sleepStart?: Date | null;
  userId?: string | null;
  wakeUpCount?: number | null;
};
