import "./Create-Username.css"
import { Link } from "react-router-dom"
import {useState} from 'react'
import React from 'react';
import { useNavigate } from "react-router-dom";
import { createGroupOrder } from "../../firebase";
import { setORDER_ID, setUSERNAME } from "../order_info";


const Username = ({ }) => {
    
    const [username, setUsername] = useState('');
    const [updated, setUpdated] = useState(username);

    const navigate = useNavigate();

    const handleChange = (event) => {
        setUsername(event.target.value);
        setUSERNAME(event.target.value)
    };

    const handleClick = () => {
        // setUpdated(username);
        let orderID = createGroupOrder(username)
        setORDER_ID(orderID)
        navigate('/cart-view', {state: {orderID: orderID}});
    };

    return (
        <div id = "CU-total">
            <div id = "CU-center-box">
                <div id = "CU-username">
                    <input type="text" id="username" name="username" placeholder="Enter username" onChange = {handleChange} value = {username}/>
                </div>
                <div id = "CU-enter">
                    <button type="CU-button" onClick={handleClick} id = "btn">Enter</button>
                </div>
            </div>
        </div>
        )
}

export default Username