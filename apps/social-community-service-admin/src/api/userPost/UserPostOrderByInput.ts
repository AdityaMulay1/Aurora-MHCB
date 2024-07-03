import { SortOrder } from "../../util/SortOrder";

export type UserPostOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likesCount?: SortOrder;
  postId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
