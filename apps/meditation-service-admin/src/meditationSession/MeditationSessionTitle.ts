import { MeditationSession as TMeditationSession } from "../api/meditationSession/MeditationSession";

export const MEDITATIONSESSION_TITLE_FIELD = "name";

export const MeditationSessionTitle = (record: TMeditationSession): string => {
  return record.name?.toString() || String(record.id);
};
