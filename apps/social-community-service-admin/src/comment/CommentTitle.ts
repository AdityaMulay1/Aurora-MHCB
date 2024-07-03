import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "commentId";

export const CommentTitle = (record: TComment): string => {
  return record.commentId?.toString() || String(record.id);
};
