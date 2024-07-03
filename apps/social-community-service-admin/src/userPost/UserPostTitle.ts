import { UserPost as TUserPost } from "../api/userPost/UserPost";

export const USERPOST_TITLE_FIELD = "postId";

export const UserPostTitle = (record: TUserPost): string => {
  return record.postId?.toString() || String(record.id);
};
