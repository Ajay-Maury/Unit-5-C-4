import { useState } from "react";

export const Login = () => {
  const [uname , setUname] = useState("")
  const [pass , setPass] = useState("")
  return (
    <div>
      <input
        onChange={(e) => setUname(e.target.value)}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        onChange={(e) => setPass(e.target.value)}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit">Login</button>
    </div>
  );
};
