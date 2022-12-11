import { useContext } from "react";
import itemContext from "../contexts/Context";
import { useEffect } from "react";
import Orderitem from "./Orderitem";


function Orders() {

    const context = useContext(itemContext);
    const { getOrders, orders } = context;

    useEffect(() => {
        getOrders();
    }, [])




    return (
        <div className="container">
            <div>
                <h2>Your Orders</h2>
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
                            {orders.map((order,index) => {
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

export default Orders;