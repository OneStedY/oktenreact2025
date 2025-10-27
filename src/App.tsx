import {Menu} from "./components/menu/Menu.tsx";
import './App.css'
import {Outlet} from "react-router-dom";


function App() {


  return (
    <>
        <Menu/>
        This is app component
        <Outlet/>
    </>
  );
}

export default App
