import { Link, useNavigate } from "react-router-dom";
import Orderdetails from "./Orderdetails";

function Orderitem(props) {
    const { order } = props;
    const history=useNavigate();

    function handleClick() {
        const path = "/orders/" + String(order._id);

        history(path);
    }
   



    return (
            <tr onClick={handleClick} className="order-link">
                <th scope="row">{props.index+1}</th>
                <td>{order._id}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
            </tr>

    )
}

export default Orderitem;

{/* <Link to={path} className="order-link"></Link> */}
  {/* <p className="order-info">{order._id}</p>
                <p className="order-info">{order.status}</p> */}
