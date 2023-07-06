import "./Order.css"
import { Link, useLocation } from "react-router-dom"
import {useState} from 'react'
import React from 'react';
import { useNavigate } from "react-router-dom";
import { addFoodItems } from "../../firebase";
import { getORDER_ID } from "../order_info";
import { getUSER_ID } from "../order_info";
import { getUSERNAME } from "../order_info";


const Order = ({ }) => {
    const {state} = useLocation();
    const {name} = state;

    const [foodItem, setFoodItem] = useState('');

    const navigate = useNavigate();

    const handleChangeFood = (event) => {
        setFoodItem(event.target.value);
    };

    const handleClick = () => {
        // setOrder([name, foodItem]);
        let food_order = {
            name: getUSERNAME(),
            restaurant_name: name,
            food_items: foodItem
        }
        // let food_order = [getUSERNAME(), name, foodItem]
        addFoodItems(getUSER_ID(), getORDER_ID(), food_order);
        navigate('/cart-view');
    };

    return (
        <div id = "O-total">
            <div id = "O-center-box">
                <div is = "O-Text">
                    <h3>Enter what food you would like to order from {name}!</h3>
                </div>
                <div id = "O-Text">
                    <h3>Enter what food you would like to order from {name}!</h3>
                </div>
                <div id = "O-foodItem">
                    <input type="text" id="foodItem" name="foodItem" placeholder="Enter food item" onChange = {handleChangeFood} value = {foodItem}/>
                </div>
                <div id = "O-enter">
                    <button type="O-button" onClick={handleClick} id = "O-btn">Enter</button>
                </div>
            </div>
        </div>
        )
}

export default Order