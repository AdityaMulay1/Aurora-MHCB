import { MeditationSubPage as TMeditationSubPage } from "../api/meditationSubPage/MeditationSubPage";

export const MEDITATIONSUBPAGE_TITLE_FIELD = "subPageTitle";

export const MeditationSubPageTitle = (record: TMeditationSubPage): string => {
  return record.subPageTitle?.toString() || String(record.id);
};
