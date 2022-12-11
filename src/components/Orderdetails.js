import { useContext } from "react";
import { useLocation } from "react-router-dom";
import itemContext from "../contexts/Context";

function Orderdetails() {
    let location = useLocation();
    let pathname = location.pathname;
    const context = useContext(itemContext);
    const { orders } = context;
    let reqOrder;

    for (var i = 0; i < orders.length; i++) {
        let path = "/orders/" + String(orders[i]._id)
        if (path === pathname) {
            //console.log(orders[i]);
            reqOrder = orders[i];
        }
    }
    //  console.log(reqOrder);
    const myOrders = reqOrder.orders;
    //  console.log(myOrders);

    function totalPrice() {
        var a = 0;
        for (var i = 0; i < myOrders.length; i++) {
            a = a + (myOrders[i].price * myOrders[i].quantity);
        }
        return a;
    }
    var amount = totalPrice();




    return (
        <div className="card container">
            <div className="title">Purchase Reciept</div>
            <div className="info">
                <div className="row">
                    <div className="col-7">
                        <span id="heading">Date</span><br />
                        <span id="details">{reqOrder.date}</span>
                    </div>
                    <div className="col-5 pull-right">
                        <span id="heading">Order ID.</span><br />
                        <span id="details">{reqOrder._id}</span>
                    </div>
                </div>
            </div>
            <div className="pricing">
                {myOrders.map((myorder) => {
                    return (
                        <div className="row">
                            <div className="col-9">
                                <span id="name">{myorder.name}</span>
                            </div>
                            <div className="col-3">
                                <span id="price">₹{myorder.price*myorder.quantity}</span>
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
            <div className="tracking">
                <div className="title">Tracking Order</div>
            </div>
            <div className="progress-track">
                <ul id="progressbar">
                    <li className="step0 active " id="step1">Ordered</li>
                    <li className="step0 active text-center" id="step2">Shipped</li>
                    <li className="step0 active text-right" id="step3">On the way</li>
                    <li className="step0 text-right" id="step4">Delivered</li>
                </ul>
            </div>

        </div>
    )
}

export default Orderdetails;