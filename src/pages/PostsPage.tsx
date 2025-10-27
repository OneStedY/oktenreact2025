import { Link, Outlet } from "react-router-dom";
export const PostsPage = () => (
    <>
        <h2>posts</h2>
        <nav>
            <Link to="dummyjson">dummyjson</Link>{" "}
            <Link to="jsonplaceholder">jsonplaceholder</Link>
        </nav>
        <Outlet />
    </>
);