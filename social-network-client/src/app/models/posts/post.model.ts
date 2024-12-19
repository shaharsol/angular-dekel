import { User } from "../users/user.model";

export interface Post {
    id: string,
    userId: string,
    title: string,
    body: string,
    createdAt: string,
    user: User
}
