export type SleepPattern = {
  createdAt: Date;
  id: string;
  notes: string | null;
  patternId: string | null;
  sleepDate: Date | null;
  sleepDuration: number | null;
  sleepEnd: Date | null;
  sleepQuality: string | null;
  sleepStart: Date | null;
  updatedAt: Date;
  userId: string | null;
  wakeUpCount: number | null;
};
