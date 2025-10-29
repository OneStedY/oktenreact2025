import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";

const routes = createBrowserRouter([{
    path: '/', element:<MainLayout/>, children:[
        {path: "users", element:<UsersPage/>}
    ]
}])

export default routes

