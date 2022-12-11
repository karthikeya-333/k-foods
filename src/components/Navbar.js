import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    let history = useNavigate();
    function handleLogout(){
        localStorage.removeItem("user");
        history("/login");
    }
    return (
       <nav className="container mx-auto d-flex justify-content-between nav">
        <div>
        <h4 className="logo">K-foods</h4>
        </div>
        <div>
            <ul className="d-inline-flex  flex-row">
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/orders">Orders</Link></li>
                <li>
                  {!localStorage.getItem("user") ? <form className="d-flex"> 
                  <Link to="/login"  className="link" >Login</Link>
               </form> :<p className="link" style={{cursor:"pointer"}} onClick={handleLogout}>Logout</p>}
                </li>
                <li><Link className="cartlogo rounded-full" to="/cart"><img src="https://img.icons8.com/ios-filled/25/FFFFFF/shopping-cart.png"/></Link></li>
            </ul>
        </div>
       </nav>
    )
}

export default Navbar;


