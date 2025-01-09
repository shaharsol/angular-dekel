import { User } from "../users/user.model";
import { SocketMessage } from "./socket-message.model";

export interface NewUnfollow extends SocketMessage {
    followee: User,
    follower: User
}