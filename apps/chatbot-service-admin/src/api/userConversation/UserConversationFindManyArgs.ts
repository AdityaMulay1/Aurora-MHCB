import { UserConversationWhereInput } from "./UserConversationWhereInput";
import { UserConversationOrderByInput } from "./UserConversationOrderByInput";

export type UserConversationFindManyArgs = {
  where?: UserConversationWhereInput;
  orderBy?: Array<UserConversationOrderByInput>;
  skip?: number;
  take?: number;
};
