import { User } from "../users/user.model";
import { SocketMessage } from "./socket-message.model";

export interface NewFollow extends SocketMessage {
    followee: User,
    Follower: User
}