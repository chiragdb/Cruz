import "./CartViewNavbar.css"
import { FaMap } from "react-icons/fa";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import {MyContext} from "./myContext.js";
import { getORDER_ID } from "../order_info";
import { Link, useNavigate } from "react-router-dom"

const CartViewNavbar = ({ }) => {
    // const {state} = useLocation();
    // const { orderID } = state;
    // console.log(orderID);
    return (
        // <MyContext.Provider value = {orderID}>
        <div id = "header">
            <div id = "hex">
                <div id = "text">
                    Join this Group Order
                </div>
                <div id = "code">
                    {getORDER_ID()}
                </div>
            </div>
        </div>
        // </MyContext.Provider>
    );
}

export default CartViewNavbar