import { Link, Outlet } from "react-router-dom";
export const UsersPage = () => (
    <>
        <h2>users</h2>
        <nav>
            <Link to="dummyjson">dummyjson</Link>{" "}
            <Link to="jsonplaceholder">jsonplaceholder</Link>
        </nav>
        <Outlet />
    </>
);