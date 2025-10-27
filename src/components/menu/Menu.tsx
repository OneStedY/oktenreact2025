import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <nav>
            <Link to="/">/</Link>{" "}
            <Link to="/users/jsonplaceholder"> users - jsonplaceholder | </Link>{" "}
            <Link to="/users/dummyjson"> users - dummyjson | </Link>{" "}
            <Link to="/posts/jsonplaceholder"> posts -jsonplaceholder |</Link>{" "}
            <Link to="/posts/dummyjson"> posts - dummyjson | </Link>{" "}
            <Link to="/comments/jsonplaceholder"> comments - jsonplaceholder | </Link>{" "}
            <Link to="/comments/dummyjson"> comments - dummyjson | </Link>
        </nav>
    );
};