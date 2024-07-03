import { UserPostWhereInput } from "./UserPostWhereInput";
import { UserPostOrderByInput } from "./UserPostOrderByInput";

export type UserPostFindManyArgs = {
  where?: UserPostWhereInput;
  orderBy?: Array<UserPostOrderByInput>;
  skip?: number;
  take?: number;
};
