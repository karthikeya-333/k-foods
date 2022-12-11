import { Link, useNavigate } from "react-router-dom";

function AdminNav(){

    let history = useNavigate();
    function handleLogout(){
        localStorage.removeItem("admin");
        history("/login");
    }

    return(
        <nav className="container mx-auto d-flex justify-content-between nav">
        <div>
        <h4 className="logo">K-foods</h4>
        </div>
        <div>
            <ul className="d-inline-flex  flex-row">
                <li><Link className="link" to="/">Orders</Link></li>
                <li><Link className="link" to="/menu">Menu</Link></li>
                <li>
                  {!localStorage.getItem("admin") ? <form className="d-flex"> 
                  <Link to="/login"  className="link" >Login</Link>
               </form> :<p className="link" style={{cursor:"pointer"}} onClick={handleLogout}>Logout</p>}
                </li>
            </ul>
        </div>
       </nav>

    )
}

export default AdminNav;