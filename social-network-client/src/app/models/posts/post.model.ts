import { User } from "../users/user.model";
import { Draft } from "./draft.model";

export interface Post extends Draft{
    id: string,
    userId: string,
    createdAt: string,
    user: User
}
