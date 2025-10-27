import { ListPage } from "./ListPage";

export const UsersJsonplaceholderPage = () => (
    <>
        <h2>users - jsonplaceholder | </h2>
        <ListPage url="https://jsonplaceholder.typicode.com/users" />
    </>
);

export const UsersDummyjsonPage = () => (
    <>
        <h2>users - dummyjson | </h2>
        <ListPage url="https://dummyjson.com/users" pick="users" />
    </>
);

export const PostsJsonplaceholderPage = () => (
    <>
        <h2>posts - jsonplaceholder | </h2>
        <ListPage url="https://jsonplaceholder.typicode.com/posts" />
    </>
);

export const PostsDummyjsonPage = () => (
    <>
        <h2>posts - dummyjson | </h2>
        <ListPage url="https://dummyjson.com/posts" pick="posts" />
    </>
);

export const CommentsJsonplaceholderPage = () => (
    <>
        <h2>comments - jsonplaceholder | </h2>
        <ListPage url="https://jsonplaceholder.typicode.com/comments" />
    </>
);

export const CommentsDummyjsonPage = () => (
    <>
        <h2>comments - dummyjson | </h2>
        <ListPage url="https://dummyjson.com/comments" pick="comments" />
    </>
);