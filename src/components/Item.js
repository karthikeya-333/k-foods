import { useState } from "react";
import itemContext from "../contexts/Context";
import { useContext } from "react";

function Item(props) {
    let path = "images/" + props.type + "/" + props.name[0] + ".jpeg";
    const [number, setNumber] = useState(1);

    const context = useContext(itemContext);
    const { addItem } = context;

    function handleDecrease() {
        if (number >= 2) {
            setNumber(number - 1);
        }

    }

    function handleIncrease() {
        setNumber(number + 1);
    }

    function handleAdd() {
        addItem(props.type, props.name[0], number, props.name[1]);
        setNumber(1);
    }

    return (
        <div className="col-sm-6 col-md-4" style={{marginBottom : 20,marginTop:15}}>
            <div className="fooditem" >
                <img className="food-img card-img-bottom" src={path} />
                <div>
                    <h2>{props.name[0]}</h2>
                    <h2>₹{props.name[1]}</h2>
                    <div style={{display:"inline-flex",marginBottom : 5}} className="text-center">
                        <button className="number-button btn btn-outline-primary " onClick={handleDecrease}>-</button>
                        <button style={{marginLeft: 7,marginRight: 7}} type="button" className="btn btn-outline-primary cart-button" onClick={handleAdd}> Add to cart </button>
                        <button className="number-button btn btn-outline-primary" onClick={handleIncrease}>+</button>
                    </div>
                </div>
                <span style={{margin: 5,color:"#FF6D28"}}>Quantity:{number}</span>
            </div>
            
        </div>

    )
}

export default Item;

{/* <div className="col-4">
            <div className="food-item ">
                <img src={path} />
                <h4>{props.name[0]}</h4>
                <h4>{props.name[1]}</h4>
                <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-outline-secondary" onClick={handleIncrease}>-</button>
                <h4>Quantity : {number}</h4>
                <button type="button" class="btn btn-outline-secondary" onClick={handleDecrease}>+</button>
                </div>
                <button type="button" class="btn btn-outline-primary cart-button" onClick={handleAdd}>Add to cart</button>

            </div>
        </div> */}