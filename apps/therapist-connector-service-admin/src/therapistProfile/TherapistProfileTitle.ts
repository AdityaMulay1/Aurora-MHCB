import { TherapistProfile as TTherapistProfile } from "../api/therapistProfile/TherapistProfile";

export const THERAPISTPROFILE_TITLE_FIELD = "name";

export const TherapistProfileTitle = (record: TTherapistProfile): string => {
  return record.name?.toString() || String(record.id);
};
