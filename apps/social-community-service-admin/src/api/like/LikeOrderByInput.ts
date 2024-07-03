import { SortOrder } from "../../util/SortOrder";

export type LikeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  likeId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userPostId?: SortOrder;
};
