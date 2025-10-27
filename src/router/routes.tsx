import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import { HomePage } from "../pages/HomePage";
import { UsersPage } from "../pages/UsersPage";
import { PostsPage } from "../pages/PostsPage";
import { CommentsPage } from "../pages/CommentsPage";
import { JsonplaceholderPage } from "../pages/JsonplaceholderPage";
import { DummyjsonPage } from "../pages/DummyjsonPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            { index: true, element: <HomePage/> }, // Homepage
            {
                path: 'users', // Users page
                element: <UsersPage/>,
                children: [
                    { path: 'dummyjson', element: <DummyjsonPage/> }, // Users -> dummyjson
                    { path: 'jsonplaceholder', element: <JsonplaceholderPage/> }, // Users -> jsonplaceholder
                ],
            },
            {
                path: 'posts', // Posts page
                element: <PostsPage/>,
                children: [
                    { path: 'dummyjson', element: <DummyjsonPage/> },
                    { path: 'jsonplaceholder', element: <JsonplaceholderPage/> },
                ],
            },
            {
                path: 'comments', // Comments page
                element: <CommentsPage/>,
                children: [
                    { path: 'jsonplaceholder', element: <JsonplaceholderPage/> },
                ],
            },
            { path: '*', element: <></> }, // без страниц ошибок
        ],
    },
]);