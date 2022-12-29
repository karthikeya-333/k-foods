import itemContext from "../contexts/Context";
import { useContext, useEffect, useState } from "react";
import Cartitem from "./Cartitem";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
    const context = useContext(itemContext);
    const { items, getItems, addOrder } = context;
    const [address, setAddress] = useState();
    const { deleteItem } = context;
    const host = "http://localhost:5000";
    let history = useNavigate();

    useEffect(() => {
        getItems();
    }, []);

    function totalPrice() {

        var a = 0;
        for (var i = 0; i < items.length; i++) {
            a = a + (items[i].price * items[i].quantity);
        }
        return a;
    }
    var amount = totalPrice();

    function handleChange(e) {
        setAddress(e.target.value);
    }

    async function handleClick() {
        await addOrder(address);
        getItems();
        history("/orders");
    }



    return (
        <div className="card" style={{marginTop:60}}>
            <div className="title  fontheading"><h3>My Cart</h3></div>
            <div className="pricing">
                {items.map((item) => {
                    return <Cartitem key={item.name} item={item} />
                })}

            </div>
            <div className="total">
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-3"><big>₹{amount}</big></div>
                </div>
            </div>
            {amount!=0 && <div className="text-center">
                <div >
                    <label className="title " style={{ padding: 3 }}>Address:</label>
                    <input name="address" value={address} onChange={handleChange} />
                </div>
                <div style={{ marginTop: 15 }}>
                    <button class="btn btn-light">Place Order</button>
                </div>
            </div>}
        </div>

    )
}

export default Cart;


