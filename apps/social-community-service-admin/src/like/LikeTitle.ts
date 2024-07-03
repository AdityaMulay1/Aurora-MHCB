import { Like as TLike } from "../api/like/Like";

export const LIKE_TITLE_FIELD = "likeId";

export const LikeTitle = (record: TLike): string => {
  return record.likeId?.toString() || String(record.id);
};
