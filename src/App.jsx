import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Home } from "./components/Home"
import { Login } from "./components/Login"
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import { Navigate, Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <h1>Home Login</h1> */}
      <Nav />
      {/* <Navigate to={<Login/>}>HOme Login</Navigate> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/neworder"
          element={
            <ProtectedRoute>
              <NewOrder />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App
