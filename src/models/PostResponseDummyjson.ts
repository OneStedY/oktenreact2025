import type {PostModel} from "./PostModel.ts";

export interface PostResponseDummyjson {
    posts: PostModel[];
    skip: number;
    total: number;
    limit: number;
}