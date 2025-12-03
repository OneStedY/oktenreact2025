import {useFetch} from "./hooks/useFetch.tsx"
import './App.css'


function App() {
  const users = useFetch<{ id:number, name:string }[]>('https://jsonplaceholder.typicode.com/users', [])

  return (
    <>
      {
        users.map((user)=>(
            <div key={user.id}>
              {user.id} {user.name}
            </div>
        ))
      }
    </>
  );
}

export default App
