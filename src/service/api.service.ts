import type {TodoModel} from "../models/TodoModel.ts";
import type {PostModel} from "../models/PostModel.ts";
import type {CommentModel} from "../models/CommentModel.ts";

const endPointTodos = import.meta.env.VITE_API_URL + '/todos'
const endPointPosts = import.meta.env.VITE_API_URL + '/posts'
const endPointComments = import.meta.env.VITE_API_URL + '/comments'



const loadTodos=async () =>{
    const response:TodoModel[] =    await fetch(endPointTodos)
        .then(value => value.json());

    return response
}

const loadPosts = async (): Promise<PostModel[]> =>{
    return await fetch(endPointPosts)
        .then(value => value.json())
}

const loadComments = async (): Promise<CommentModel[]> =>{
    return await fetch(endPointComments)
        .then(value => value.json())
}



export {loadTodos, loadPosts, loadComments}