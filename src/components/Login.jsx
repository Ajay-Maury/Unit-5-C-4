import { useContext, useEffect, useState } from "react";
// import { AuthContext, } from "../context/AuthContext";
import axios from "axios"
import { useNavigate } from "react-router-dom";
export const Login = () => {
// const {isAuth, toggleAuth}=useContext(AuthContext )
  const [search, setSearch] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("")

  let Navigate = useNavigate();
  
  // useEffect(() => {
  //  
  // }, [getData(search, password)]);

  async function getData(username,pass) {
    axios
      .get(`http://localhost:8080/users/?username=${username}&&pass=${pass}`)
      .then(function (response) {
        let userdetails = response.data[0];
        if (userdetails === undefined)
          alert("please check the credentails")
        console.log(userdetails);
        setRole(userdetails.role);
        console.log(role)
         if (role === "admin") {
      Navigate(`/orders`);
    } else if (role === "client") {
      Navigate("/neworder");
    }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
        // console.log(userdetails)
        // console.log(role)
      });
  }
  return (
    <div>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is admin take him to /orders page otherwise take him to /neworder */}
      <button
        onClick={() => {
          getData(search, password);
        }}
        className="submit"
      >
        Login
      </button>
    </div>
  );
};