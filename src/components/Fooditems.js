import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import itemContext from "../contexts/Context";
import Item from "./Item";

const vegItems = [["Tomato",20], ["Brinjal",20],[ "Ladies Finger",20], ["Dal",20],[ "Sambar",20]];
const nonvegItems = [["Chicken",50],["Mutton",70],["Fish",50],["Egg",20]];
const otherItems = [["Rice",25],["Biryani",80]];


function Fooditems() {

    const context = useContext(itemContext);
    const {getOrders}= context;
    return (
        <div>
            <div style={{marginTop:30}}>
                <h2>Vegetarian</h2>
                <div className="row" style={{marginBottom : 30}}>
                    {vegItems.map((item) => {
                        return <Item key={item} name={item} type="vegRecipies"/>
                    })}
                </div>

            </div>
            <div>
                <h2>Non-Vegetarian</h2>
                <div className="row" style={{marginBottom : 30}}>
                    {nonvegItems.map((item) => {
                        return <Item key={item}  name={item} type="nonvegRecipies" />
                    })}
                </div>

            </div>
            <div>
                <h2>Others</h2>
                <div className="row" style={{marginBottom : 30}}>
                    {otherItems.map((item) => {
                        return <Item key={item}  name={item} type="others"/>
                    })}
                </div>

            </div>
        </div>
    )
}

export default Fooditems;