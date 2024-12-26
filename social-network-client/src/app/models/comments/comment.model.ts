import { User } from "../users/user.model";

export interface Comment {
    id: string,
    postId: string,
    userId: string,
    body: string,
    createdAt: string,
    user: User
}
