import { UserProfileWhereUniqueInput } from "./UserProfileWhereUniqueInput";
import { UserProfileUpdateInput } from "./UserProfileUpdateInput";

export type UpdateUserProfileArgs = {
  where: UserProfileWhereUniqueInput;
  data: UserProfileUpdateInput;
};
