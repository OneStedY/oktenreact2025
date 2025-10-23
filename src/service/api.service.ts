const endPoint = import.meta.env.VITE_API_BASE_URL
const loadTodos=async () =>{
    await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(value => value.json())
        .then(value => {

        })
}
export {loadTodos}