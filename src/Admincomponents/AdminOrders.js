import { useContext, useEffect } from "react";
import Orderitem from "../components/Orderitem";
import itemContext from "../contexts/Context";

function AdminOrders(){
    const context= useContext(itemContext);
    const {getAllorders,allorders}=context;


    useEffect(() => {
      getAllorders();
      //console.log(allorders);
      //console.log("hello")
    
    }, [])
    
    
    return(
        <div className="container">
          <div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ORDER ID</th>
                            <th scope="col">DATE</th>
                            <th scope="col">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                            {allorders.map((order,index) => {
                                return (
                                        <Orderitem key={order._id} index={index} order={order} />
                                )
                            })}
                    </tbody>
                </table>

            </div>


            

        </div>
    )
}

export default AdminOrders;