import { UserProfileWhereInput } from "./UserProfileWhereInput";
import { UserProfileOrderByInput } from "./UserProfileOrderByInput";

export type UserProfileFindManyArgs = {
  where?: UserProfileWhereInput;
  orderBy?: Array<UserProfileOrderByInput>;
  skip?: number;
  take?: number;
};
