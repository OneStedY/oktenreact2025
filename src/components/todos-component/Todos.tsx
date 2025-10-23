import './Todos.css'
import {useEffect, useState} from "react";
export const Todos = () => {
    const [todos, setTodos] = useState<TodoModel[]>([])
    useEffect(() => {
        //loadTodos
    }, []);

    return (
        <div></div>
    );
};