import { UserProfile as TUserProfile } from "../api/userProfile/UserProfile";

export const USERPROFILE_TITLE_FIELD = "username";

export const UserProfileTitle = (record: TUserProfile): string => {
  return record.username?.toString() || String(record.id);
};
