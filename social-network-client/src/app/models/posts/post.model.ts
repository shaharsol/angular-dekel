import { User } from "../users/user.model";
import { Comment } from "../comments/comment.model";
import { Draft } from "./draft.model";

export interface Post extends Draft{
    id: string,
    userId: string,
    createdAt: string,
    user: User,
    comments: Comment[]
}
