import itemContext from "../contexts/Context";
import { useContext } from "react";

function Cartitem(props){
    const {item}=props;
    const context = useContext(itemContext);
    const {deleteItem} = context;
    const totalPrice = item.price * item.quantity;


    function handleDelete(){
        console.log("delete");
        deleteItem(item._id);
    }

    return(
        <div class="row">
                    <div class="col-5">
                        <span id="name">{item.name}</span>  
                    </div>
                    <div class="col-3">
                        <span id="price">{item.quantity}</span>
                    </div>
                    <div class="col-3">
                        <span id="price">₹{totalPrice}</span>
                    </div>
                </div>

    )
}

export default Cartitem;


 // <div className="cart-item ">
        //     <div>
        //     <h5></h5>
        //     <h5></h5>
        //     </div>
        //     <div>
        //     <h5></h5>
        //     <i class="fa-solid fa-circle-minus" style={{cursor : "pointer"}} onClick={handleDelete}></i>
        //     </div>
        // </div>