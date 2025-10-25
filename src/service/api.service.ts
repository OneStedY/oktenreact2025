import type {TodoModel} from "../models/TodoModel.ts";
import type {PostModel} from "../models/PostModel.ts";
import type {CommentModel} from "../models/CommentModel.ts";
import type {PostResponseDummyjson} from "../models/PostResponseDummyjson.ts";
import type {ProductsResponseDummyjson} from "../models/ProductResponseDummyjson.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos'
const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts'
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments'
const endpointProducts = import.meta.env.VITE_API_BASE_URL + "/products";


const loadProducts = async (): Promise<ProductsResponseDummyjson[]> => {
    const res = await fetch(endpointProducts);
    return res.json();
};

const loadTodos = async (): Promise<TodoModel[]> => {
    return await fetch(endpointTodos)
        .then(value => value.json());
}

const loadPosts = async (): Promise<PostModel[]> => {
    const response: PostResponseDummyjson = await fetch(endpointPosts)
        .then(value => value.json());
    return response.posts;
}


const loadComments = async (): Promise<CommentModel[]> => {
    return await fetch(endpointComments)
        .then(value => value.json());
}

export {loadTodos, loadPosts, loadComments, loadProducts}