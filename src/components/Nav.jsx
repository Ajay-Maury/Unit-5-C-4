import { Link } from "react-router-dom"
import { Login } from "./Login"

export const Nav = () => {
    return (
      <>
        <Link to={"/login"}>
          <strong>Home Login</strong>
        </Link>
      </>
    );
}