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
        <div className="row">
                    <div className="col-5">
                        <span id="name">{item.name}</span>  
                    </div>
                    <div className="col-3">
                        <span id="price">{item.quantity}</span>
                    </div>
                    <div className="col-3">
                        <span id="price">₹{totalPrice}</span>
                    </div>
                    <div className="col-1">
                        <span id="price"><i onClick={handleDelete} style={{cursor : "pointer"}} className="fa-solid fa-circle-minus"></i></span>
                    </div>
                </div>

    )
}

export default Cartitem;


 // <div classNameName="cart-item ">
        //     <div>
        //     <h5></h5>
        //     <h5></h5>
        //     </div>
        //     <div>
        //     <h5></h5>
        //     <i className="fa-solid fa-circle-minus" style={{cursor : "pointer"}} onClick={handleDelete}></i>
        //     </div>
        // </div>