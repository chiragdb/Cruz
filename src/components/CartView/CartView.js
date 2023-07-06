import "./CartView.css"
import CartViewNavbar from "./CartViewNavbar";
import { FaRegPlusSquare, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"
import React, {useEffect, useState} from "react";
import { attachListener } from "../../firebase";
import { getORDER_ID } from "../order_info";
import CartCard from "./CartCard";

const CartView = ({ }) => {  
    const [data, setData] = useState([])
    const [numPeople, setNumPeople] = useState(0)

    useEffect(() => {
        // const orderID = "e4lBlSLb"
        attachListener(getORDER_ID(), (receivedData) => {
            if (receivedData === null) {
                setData([])
            } else {
                console.log(receivedData)
                setData(Object.values(receivedData))
                setNumPeople(Object.values(receivedData).length)
                // console.log(data)
            }
        })
    }, [])


    return (
        <div id = "CV-total">
            <CartViewNavbar/>
            <div id = "CV-middle">
                <div id = "CV-members">
                    <div id = "CV-prefix">
                        Number of
                    </div>
                    <div id = "CV-suffix">
                        People: {numPeople}
                    </div>
                </div>
                <div id = "CV-name">
                    Cruz
                </div> 
                    <div id = "CV-add">
                        <Link to="/restaurant-view">
                            <FaRegPlusSquare/>
                        </Link> 
                        <Link to="/restaurant-view">
                            <FaHome/>
                        </Link> 
                    </div>
            </div>
            <div id="order-list">
                {/* {data || data.length === 0 ? (
                    <ul id="cart-view">
                        {data.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : <h1 id="no-orders-msg">No orders yet!</h1>} */}
                {data.map(elem =>
                    <div id = "card">
                        <CartCard name = {elem.name} restaurantName = {elem.restaurant_name}
                            food = {elem.food_items} />
                    </div>
                )}
            </div>
        </div>
        
    )
}

export default CartView