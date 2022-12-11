import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Orders from "./components/Orders";
import Orderdetails from "./components/Orderdetails";
import AdminHome from "./Admincomponents/AdminHome";
import { useContext, useEffect } from "react";
import itemContext from "./contexts/Context";
import AdminOrderdetails from "./Admincomponents/AdminOrderdetails";




function App() {
  const context = useContext(itemContext);
  let { role, setRole } = context;
  let history = useNavigate();

  useEffect(() => {
    if (!localStorage.key(0)) {
      history("/login");
    }
    else {
      setRole(String(localStorage.key(0)));
    }
  }, [])

  return (

    <Routes>
      <Route path="/" element={role == "admin" ? <AdminHome /> : <><Navbar /><Home /></>} />
      <Route path="/cart" element={role == "user" && <><Navbar /><Cart /></>} />
      <Route path="/orders" element={role == "user" && <><Navbar /><Orders /></>} />
      <Route path="/orders/:id" element={role == "admin" ? <AdminOrderdetails/> : <><Navbar /><Orderdetails /></>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>

  );
}

export default App;
