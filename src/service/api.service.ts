import type {TodoModel} from "../models/TodoModel.ts";

const endPointTodos = import.meta.env.VITE_API_URL + '/todos'
const loadTodos=async () =>{
    const response:TodoModel[] =    await fetch(endPointTodos)
        .then(value => value.json());

    return response

}
export {loadTodos}