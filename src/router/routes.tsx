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
            { index: true, element: <HomePage/> },
            {
                path: 'users',
                element: <UsersPage/>,
                children: [
                    { path: 'dummyjson', element: <DummyjsonPage/> },
                    { path: 'jsonplaceholder', element: <JsonplaceholderPage/> },
                ],
            },
            {
                path: 'posts',
                element: <PostsPage/>,
                children: [
                    { path: 'dummyjson', element: <DummyjsonPage/> },
                    { path: 'jsonplaceholder', element: <JsonplaceholderPage/> },
                ],
            },
            {
                path: 'comments',
                element: <CommentsPage/>,
                children: [
                    { path: 'jsonplaceholder', element: <JsonplaceholderPage/> },
                ],
            },
        ],
    },
]);