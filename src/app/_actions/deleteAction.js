import { deleteComment } from "../_data/comments";

export const deleteAction = async (commentId) => {
    deleteComment(commentId);
};