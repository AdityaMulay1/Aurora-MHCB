import { UserConversation as TUserConversation } from "../api/userConversation/UserConversation";

export const USERCONVERSATION_TITLE_FIELD = "userId";

export const UserConversationTitle = (record: TUserConversation): string => {
  return record.userId?.toString() || String(record.id);
};
