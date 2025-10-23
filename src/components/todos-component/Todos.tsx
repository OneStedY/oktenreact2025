import './Todos.css'
import {useEffect, useState} from "react";
import type {TodoModel} from "../../models/TodoModel.ts";
import {valueOf} from "node";
export const Todos = () => {
    const [todos, setTodos] = useState<TodoModel[]>([])
    useEffect(() => {
        loadTodos().then(valueOf => value);
    }, []);

    return (
        <div></div>
    );
};