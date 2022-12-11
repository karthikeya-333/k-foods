import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import itemContext from "../contexts/Context";
import AdminNav from "./AdminNav";
import { Link } from "react-router-dom";

function AdminOrderdetails() {

    let location = useLocation();
    let navigate = useNavigate();
    let pathname = location.pathname;
    const context = useContext(itemContext);
    const { allorders,updateStatus } = context;
    let reqOrder;

    for (var i = 0; i < allorders.length; i++) {
        let path = "/orders/" + String(allorders[i]._id)
        if (path === pathname) {
            //console.log(orders[i]);
            reqOrder = allorders[i];
        }
    }
    const orders = reqOrder.orders;
    function totalPrice() {
        var a = 0;
        for (var i = 0; i < orders.length; i++) {
            a = a + (orders[i].price * orders[i].quantity);
        }
        return a;
    }
    var amount = totalPrice();

    const [status,setStatus]= useState(reqOrder.status);

    function handleChange(e){
        //console.log(e.target.value);
        setStatus(e.target.value);
    }

    function handleClick(){
        //console.log(status);
        updateStatus(reqOrder._id,status);
        navigate("/");

    }

    return (
        <>
            <AdminNav />
            <div className="card container">
                <div className="title">Purchase Reciept</div>
                <div className="info">
                    <div className="row">
                        <div className="col-3">
                            <span id="heading">Date</span><br />
                            <span id="details">{reqOrder.date}</span>
                        </div>
                        <div className="col-5 pull-right">
                            <span id="heading">Order ID.</span><br />
                            <span id="details">{reqOrder._id}</span>
                        </div>
                        <div className="col-4 ">
                            <span id="heading">Address</span><br />
                            <span id="details">{reqOrder.address}</span>
                        </div>
                    </div>
                </div>
                <div className="pricing">
                    {orders.map((order) => {
                        return (
                            <div className="row" key={order._id}>
                                <div className="col-9">
                                    <span id="name">{order.name}</span>
                                </div>
                                <div className="col-3">
                                    <span id="price">₹{order.price * order.quantity}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="total">
                    <div className="row">
                        <div className="col-9"></div>
                        <div className="col-3"><big>₹{amount}</big></div>
                    </div>
                </div>
                <div style={{marginTop : 20, marginBottom:15}} className="tracking ">
                    <div className="title">Tracking Order</div>
                </div>
                <div className="progress-track ">
                    <label ><h5>Status:</h5></label>
                    <select  style={{margin : 15,height:28}} name="status" onChange={handleChange} value={status} className="select" >
                        <option value="pending">Pending</option>
                        <option value="shipped">Shipped</option>
                        <option value="on the way">On the way</option>
                        <option value="delivered">Delivered</option>
                    </select>
                    <button className="btn btn-outline-primary btn-sm status-button" onClick={handleClick} style={{height : 30}} role="button">Next</button>
                </div>

            </div>
        </>


    )
}

export default AdminOrderdetails;