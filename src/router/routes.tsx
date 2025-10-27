import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import { HomePage } from "../pages/HomePage";
import { UsersPage } from "../pages/UsersPage";
import { PostsPage } from "../pages/PostsPage";
import { CommentsPage } from "../pages/CommentsPage";
import { UsersJsonplaceholderPage } from "../pages/UsersJsonplaceholderPage";
import { UsersDummyjsonPage } from "../pages/UsersDummyjsonPage";
import { PostsJsonplaceholderPage } from "../pages/PostsJsonplaceholderPage";
import { PostsDummyjsonPage } from "../pages/PostsDummyjsonPage";
import { CommentsJsonplaceholderPage } from "../pages/CommentsJsonplaceholderPage";
import { CommentsDummyjsonPage } from "../pages/CommentsDummyjsonPage";

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
                    { path: 'jsonplaceholder', element: <UsersJsonplaceholderPage/> },
                    { path: 'dummyjson', element: <UsersDummyjsonPage/> },
                ],
            },
            {
                path: 'posts',
                element: <PostsPage/>,
                children: [
                    { path: 'jsonplaceholder', element: <PostsJsonplaceholderPage/> },
                    { path: 'dummyjson', element: <PostsDummyjsonPage/> },
                ],
            },
            {
                path: 'comments',
                element: <CommentsPage/>,
                children: [
                    { path: 'jsonplaceholder', element: <CommentsJsonplaceholderPage/> },
                    { path: 'dummyjson', element: <CommentsDummyjsonPage/> },
                ],
            },
        ],
    },
]);