import { Link, Outlet } from "react-router-dom";

export const CommentsPage = () => (

    <>
        <h2>comments</h2>
        <nav>
            <Link to="jsonplaceholder">jsonplaceholder</Link>
        </nav>
        <Outlet />
    </>
);

