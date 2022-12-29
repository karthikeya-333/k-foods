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
        <div className="col-sm-6 col-md-5 item ">
            <img className="card-img-bottom" src={path} />
            <div className="item-info card-img-bottom">
                <h3 className="fontitem text-center" style={{ "marginBottom": 25 }}>{props.name[0]}</h3>
                <h3 className="fontitem text-center" style={{ "marginBottom": 25 }}>₹{props.name[1]}</h3>
                <div className="card-img-bottom  text-center" style={{ "marginBottom": 25 }}>
                    <button class="btn btn-light col-2" style={{ "marginRight": 1 }} onClick={handleDecrease}>-</button>
                    <button class="btn btn-light col-4" style={{ "paddingRight": 5 ,"paddingLeft":5}}  onClick={handleAdd}>Add</button>
                    <button class="btn btn-light col-2" style={{ "marginLeft": 1 }} onClick={handleIncrease}>+</button>
                </div>
                <div  className="text-center"><span style={{ margin: 5, color: "#FF6D28" }}>Quantity:{number}</span></div>
            </div>
        </div>


    )
}

export default Item;

{/* <div className="col-sm-6 col-md-4" style={{marginBottom : 20,marginTop:15}}>
            <div className="fooditem" >
                <img className="food-img card-img-bottom" src={path} />
                <div>
                    <h2>{props.name[0]}</h2>
                    <h2>₹{props.name[1]}</h2>
                    <div style={{display:"inline-flex",marginBottom : 5}} className="text-center">
                        <button className="number-button btn btn-outline-primary ">-</button>
                        <button style={{marginLeft: 7,marginRight: 7}} type="button" className="btn btn-outline-primary cart-button"> Add to cart </button>
                        <button className="number-button btn btn-outline-primary" >+</button>
                    </div>
                </div>
                <span style={{margin: 5,color:"#FF6D28"}}>Quantity:{number}</span>
            </div>
            
        </div> */}