import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  commentId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userPostId?: SortOrder;
};
