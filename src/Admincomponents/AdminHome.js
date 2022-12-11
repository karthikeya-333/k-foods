import AdminNav from "./AdminNav";
import AdminOrders from "./AdminOrders"

function AdminHome(){
    return(
        <div>
            <AdminNav/>
            <AdminOrders/>
        </div>
    )
};

export default AdminHome;