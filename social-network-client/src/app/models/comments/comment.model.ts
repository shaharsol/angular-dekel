import { User } from "../users/user.model";
import { CommentDraft } from "./comment-draft.model";

export interface Comment extends CommentDraft{
    id: string,
    postId: string,
    userId: string,
    createdAt: string,
    user: User
}
