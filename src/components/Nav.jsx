import { Link } from "react-router-dom"
import { Login } from "./Login"

export const Nav = () => {
    return (
      <>
        <Link to={"/"}>
          <strong>Home</strong>
        </Link>
        <Link to={"/login"}>
          <strong> Login</strong>
        </Link>
      </>
    );
}