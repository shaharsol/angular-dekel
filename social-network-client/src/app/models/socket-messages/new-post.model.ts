import { Post } from "../posts/post.model";
import { SocketMessage } from "./socket-message.model";

export interface NewPost extends SocketMessage {
    post: Post
}